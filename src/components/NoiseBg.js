import { useEffect, useRef } from 'react';
import P5 from 'p5';

const NoiseBg = ({ width, height }) => {
  const canvasRef = useRef(null);
  const inc = 0.05;
  const scl = 25;
  let cols, rows;
  let zoff = 9;
  let particles = [];
  let flowfield = [];

  class Particle {
    constructor(p5) {
      this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      this.vel = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
      this.acc = p5.createVector(0, 0);
      this.color = p5.color(255, 9);
      this.maxspeed = 3;
      this.prevPos = this.pos.copy();
      this.update = function () {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
      };
      this.applyForce = function (force) {
        this.acc.add(force);
      };
      this.show = function () {
        p5.stroke(this.color);
        p5.strokeWeight(1);
        p5.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
      };

      this.updatePrev = function () {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
      };

      this.edges = function () {
        if (this.pos.x > p5.width) {
          this.pos.x = 0;
          this.updatePrev();
        }
        if (this.pos.x < 0) {
          this.pos.x = p5.width;
          this.updatePrev();
        }
        if (this.pos.y > p5.height) {
          this.pos.y = 0;
          this.updatePrev();
        }
        if (this.pos.y < 0) {
          this.pos.y = p5.height;
          this.updatePrev();
        }
      };
      this.follow = function (vectors) {
        var x = p5.floor(this.pos.x / scl);
        var y = p5.floor(this.pos.y / scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
      };
    }
  }

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        const canvas = p.createCanvas(width, height);
        if (canvasRef.current) {
          canvas.parent(canvasRef.current);
        }
        cols = Math.floor(width / scl);
        rows = Math.floor(height / scl);
        flowfield = new Array(cols * rows);
        for (let i = 0; i < 2300; i++) {
          particles[i] = new Particle(p);
        }
        p.background(0);
      };

      p.draw = () => {
        let yoff = 0;
        for (let y = 0; y < rows; y++) {
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4;
            let v = p.createVector(Math.cos(angle), Math.sin(angle));
            v.setMag(0.26);
            flowfield[index] = v;
            xoff += inc;
            p.stroke(0, 50);
          }
          yoff += inc;
          zoff += 0.0005;
        }
        for (let i = 0; i < particles.length; i++) {
          particles[i].follow(flowfield);
          particles[i].update();
          particles[i].edges();
          particles[i].show();
        }
      };
    };

    const p5 = new P5(sketch);
    return () => {
      p5.remove();
    };
  }, [width, height]);

  return <div ref={canvasRef}></div>;
};

export default NoiseBg;

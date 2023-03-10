import { useEffect, useRef, useState } from 'react';
import P5 from 'p5';

// TODO: 2. Add delay to mouse gravity (so it stops slowing cursor down)

const NoiseBg = ({ width, height }) => {
  const canvasRef = useRef(null);
  const [p5, setP5] = useState(null);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const inc = 0.1;
  const scl = 15;
  const threshold = 0.5;
  let cols, rows;
  let zoff = 1;
  cols = Math.floor(width / scl);
  rows = Math.floor(height / scl);
  let flowfield = [];
  let prevMouse = new P5.Vector(0, 0);
  let curMouse = new P5.Vector(0, 0);
  let mousePos = new P5.Vector(0, 0);
  const NUM_PARTICLES = 2300;
  const particles = [];
  let particleColor = [128, 255, 190];

  class Particle {
    constructor(p5) {
      this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      this.vel = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
      this.acc = p5.createVector(0, 0);
      const opacity = Math.floor(Math.random() * (75 - 10 + 1)) + 10;
      this.color = p5.color([...particleColor, opacity]);
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
        let x = p5.floor(this.pos.x / scl);
        let y = p5.floor(this.pos.y / scl);
        let index = x + y * cols;
        if (vectors[index]) {
          let force = vectors[index].copy().mult(2);
          let mouseVel = curMouse.copy().sub(prevMouse);
          let d = mousePos.dist(this.pos);
          let m;
          if (d < 200) {
            m = p5.map(d, 0, 100, this.maxspeed, this.maxspeed / 2);
          } else {
            m = this.maxspeed;
          }
          force.add(mouseVel.mult(m));
          this.applyForce(force);
        }
      };
    }
  }

  // for (let i = 0; i < NUM_PARTICLES; i++) {
  //   const particle = new Particle(p5);
  //   particle.init(p5);
  //   particles.push(particle);
  // }

  useEffect(() => {
    const sketch = (p5) => {
      p5.setup = () => {
        p5.createCanvas(canvasSize.width, canvasSize.height).parent(
          canvasRef.current
        );
        cols = Math.floor(width / scl);
        rows = Math.floor(height / scl);
        flowfield = new Array(cols * rows);
        for (let i = 0; i < NUM_PARTICLES; i++) {
          particles[i] = new Particle(p5);
        }
      };

      p5.draw = () => {
        p5.background(0);
        let yoff = 0;
        for (let y = 0; y < rows; y++) {
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = p5.noise(xoff, yoff, zoff) * p5.TWO_PI;
            let v = p5.createVector(p5.cos(angle), p5.sin(angle));
            v.setMag(threshold);
            flowfield[index] = v;
            xoff += inc;
            p5.stroke(1);
            p5.push();
            p5.translate(x * scl, y * scl);
            p5.rotate(v.heading());
            p5.line(0, 0, scl, 0);
            p5.pop();
          }
          yoff += inc;
        }

        prevMouse = curMouse;
        curMouse = new P5.Vector(p5.mouseX, p5.mouseY);
        for (let i = 0; i < particles.length; i++) {
          particles[i].follow(flowfield);
          particles[i].update();
          particles[i].edges();
          particles[i].show();
        }

        p5.mouseMoved = () => {
          mousePos = new P5.Vector(p5.mouseX, p5.mouseY);
        };

        // prevMouse = curMouse.copy();
        mousePos.lerp(curMouse, 0.05);
        zoff += 0.0009;
      };
    };

    const p5 = new P5(sketch);
    const windowResized = () => {
      if (p5) {
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', windowResized);
    return () => {
      window.removeEventListener('resize', windowResized);
      p5.remove();
    };
  }, []);

  //   const p5 = new P5(sketch);
  //   window.addEventListener('resize', handleResize);
  //   cols = p5.floor(width / scl);
  //   rows = p5.floor(height / scl);
  //   for (let i = 0; i < 200; i++) {
  //     particles.push(new Particle(p5));
  //   }
  //   return () => {
  //     p5.remove();
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [canvasSize]);

  // const windowResized = (p5) => {
  //   p5.resizeCanvas(window.innerWidth, window.innerHeight);
  // };

  // const handleResize = () => {
  //   setCanvasSize({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });
  // };

  return <div ref={canvasRef}></div>;
};

export default NoiseBg;

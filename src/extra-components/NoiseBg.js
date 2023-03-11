import { useEffect, useRef, useState, memo } from 'react';
import P5 from 'p5';

const NoiseBg = memo(({ width, height }) => {
  const canvasRef = useRef(null);
  const [p5, setP5] = useState(null);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const inc = 0.1;
  const scl = 15;
  let cols, rows;
  let zoff = 1;
  let flowfield = [];
  let time = 0;
  const numParicles = 2500;
  const particles = [];
  let particleColor = [255, 255, 255];
  let particleSpeed = 5;
  const opacity = Math.floor(Math.random() * 47);
  let maxOpacityIncrease = 255;
  const opacityIncrease = Math.floor(Math.random() * maxOpacityIncrease) + 1;
  let prevMouse = new P5.Vector(0, 0);
  let curMouse = new P5.Vector(0, 0);
  let mousePos = new P5.Vector(0, 0);

  class Particle {
    constructor(p5) {
      this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      this.vel = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
      this.acc = p5.createVector(0, 0);
      this.color = p5.color([...particleColor, opacity]);
      this.maxspeed = particleSpeed;
      this.prevPos = this.pos.copy();
      this.update = function () {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.opacity += opacityIncrease;
        this.color.setAlpha(this.opacity);
      };
      this.applyForce = function (force) {
        this.acc.add(force);
      };
      this.show = function () {
        p5.noStroke();
        p5.fill(this.color);
        p5.circle(this.pos.x, this.pos.y, 2.5);
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
    }
  }

  useEffect(() => {
    const sketch = (p5) => {
      p5.setup = () => {
        p5.createCanvas(canvasSize.width, canvasSize.height).parent(
          canvasRef.current
        );
        cols = Math.floor(width / scl);
        rows = Math.floor(height / scl);
        flowfield = new Array(cols * rows);
        for (let i = 0; i < numParicles; i++) {
          particles[i] = new Particle(p5);
        }
        // replace setInterval with requestAnimationFrame
        p5.frameRate(60);
        p5.noStroke();
        p5.colorMode(p5.RGB, 255);
        p5.background(0);
        p5.loop();
      };

      let particleCounter = 0;
      p5.draw = () => {
        particleCounter++;

        // update the particles every 2 frames
        if (particleCounter % 2 === 0) {
          particles.forEach((particle) => {
            particle.follow(flowfield);
            particle.update();
            particle.edges();
          });
        }

        // render the particles
        particles.forEach((particle) => {
          particle.show();
        });

        p5.background(0);
        // update the flow field
        zoff += inc;
        let yoff = 0;
        for (let y = 0; y < rows; y++) {
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = p5.noise(xoff, yoff, zoff, time) * p5.TWO_PI * 1.5;
            let v = p5.createVector(p5.cos(angle), p5.sin(angle)).mult(0.5);
            flowfield[index] = v;
            xoff += inc;
          }
          yoff += inc;
          time += 0.001;
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
          prevMouse = curMouse;
          curMouse = p5.createVector(p5.mouseX, p5.mouseY);
          mousePos = p5.createVector(p5.mouseX, p5.mouseY);
        };

        mousePos.lerp(curMouse, 0.05);
        zoff += 0.009;
      };
    };

    const p5 = new P5(sketch);

    const handleReduceMotion = (e, p5) => {
      if (e.matches) {
        particleSpeed = 2;
        maxOpacityIncrease = 0;
        // follow function when reduced motion is on
        Particle.prototype.follow = function (vectors) {
          let x = p5.floor(this.pos.x / scl);
          let y = p5.floor(this.pos.y / scl);
          let index = x + y * cols;
          if (vectors[index]) {
            let force = vectors[index].copy().mult(2);
            this.applyForce(force);
          }
        };
      } else {
        particleSpeed = 5;
        // follow function when refuced motion is off
        Particle.prototype.follow = function (vectors) {
          let x = p5.floor(this.pos.x / scl);
          let y = p5.floor(this.pos.y / scl);
          let index = x + y * cols;
          if (vectors[index]) {
            let force = vectors[index].copy().mult(2);
            let mouseVel = curMouse.copy().sub(prevMouse);
            let d = mousePos.dist(this.pos);
            let m;
            if (d < 100) {
              m = p5.map(d, 0, 100, this.maxspeed, this.maxspeed / 2);
            } else {
              m = this.maxspeed;
            }
            force.add(mouseVel.mult(m));
            this.applyForce(force);
          }
        };
      }
    };

    // reduced motion listener
    const motionPref = window.matchMedia('(prefers-reduced-motion: reduce)');
    handleReduceMotion(motionPref, p5);

    const handleChange = (e) => handleReduceMotion(e, p5);
    motionPref.addEventListener('change', handleChange);

    // window resize listener
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

  return <div ref={canvasRef}></div>;
});

export default NoiseBg;

import Vector2 from "./Vector2";

export class Particle {
  constructor() {
    this.position = new Vector2();

    this.velocity = new Vector2();

    this.active = false;

    this.radius = 2;
  }
}

export class ParticlePool {
  constructor(size) {
    this.particles = new Array(size);

    this.init(0, size);
  }
  /** [min, max) */
  init(min, max) {
    for (let i = min; i < max; i++) {
      this.particles[i] = new Particle();
    }

    return this;
  }

  resize(newSize) {
    if (this.particles.length === newSize) {
      return;
    }

    const oldSize = this.particles.length;
    this.particles.length = newSize;

    if (oldSize > newSize) {
      this.init(oldSize, newSize);
    }

    return this;
  }
}

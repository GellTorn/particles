import Vector2 from "./Vector2.js"
import Random from "./Random.js"

export class Particle {
  constructor() {
    this.position = new Vector2()

    this.velocity = new Vector2()

    this.active = true

    this.letter;

    this.radius = 1
  }
}

export class ParticleManager {
  constructor(size) {
    this.particles = new Array(size)

    this.init(0, size)
  }
  
  createParticle() {
    const newParticle = new Particle()
    this.particles.push(newParticle)
    return newParticle
  }

  /** [min, max) */
  init(min, max) {
    for (let i = min; i < max; i++) {
      this.particles[i] = new Particle()
    }

    return this
  }

  generateParticlesRandomly(maxX, maxY, offset, maxVX, maxVY, maxRadius) {
    for (const particle of this.particles) {
      particle.position.set(Random.intBetween(-offset, maxX + offset), Random.intBetween(-offset, maxY + offset))
      particle.velocity.set(Random.floatBetween(-maxVX, maxVX), Random.floatBetween(-maxVY, maxVY))
      particle.radius = Random.floatBetween(0.2, maxRadius)
    }
  }
}
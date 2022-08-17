import * as THREE from 'three'
import GSAP from 'gsap'

import { SmoothScroll } from './smooth-scroll'
import { fragmentShader, vertexShader } from '../helpers/shaders'

import '../styles.css'

export class ScrollStage {
  constructor() {
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    this.mouse = {
      x: 0,
      y: 0,
    }

    this.scroll = {
      height: 0,
      limit: 0,
      hard: 0,
      soft: 0,
      ease: 0.05,
      normalized: 0,
      running: false,
    }

    this.settings = {
      // vertex
      uFrequency: {
        start: 0,
        end: 4,
      },
      uAmplitude: {
        start: 4,
        end: 4,
      },
      uDensity: {
        start: 1,
        end: 1,
      },
      uStrength: {
        start: 0,
        end: 1.1,
      },
      // fragment
      uDeepPurple: {
        // max 1
        start: 1,
        end: 0,
      },
      uOpacity: {
        // max 1
        start: 0.1,
        end: 0.66,
      },
    }

    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })

    this.canvas = this.renderer.domElement

    this.camera = new THREE.PerspectiveCamera(75, this.viewport.width / this.viewport.height, 0.1, 10)

    this.clock = new THREE.Clock()

    // this.smoothScroll = new SmoothScroll({
    //   element: this.element,
    //   viewport: this.viewport,
    //   scroll: this.scroll
    // })

    GSAP.defaults({
      ease: 'power2',
      duration: 6.6,
      overwrite: true,
    })

    this.updateScrollAnimations = this.updateScrollAnimations.bind(this)
    this.update = this.update.bind(this)

    // this.mount()
  }

  mount() {
    this.element = document.querySelector('.content')

    this.elements = {
      line: this.element.querySelector('.layout__line'),
    }

    this.smoothScroll = new SmoothScroll({
      element: this.element,
      viewport: this.viewport,
      scroll: this.scroll,
    })

    this.addCanvas()
    this.addCamera()
    this.addMesh()
    this.addEventListeners()
    this.onResize()
    this.update()
  }

  unmount() {
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0])
    }
  }

  /**
   * STAGE
   */
  addCanvas() {
    this.canvas.classList.add('webgl')
    this.element.appendChild(this.canvas)
  }

  addCamera() {
    this.camera.position.set(0, 0, 2.5)
    this.scene.add(this.camera)
  }

  /**
   * OBJECT
   */
  addMesh() {
    this.geometry = new THREE.IcosahedronGeometry(1, 64)

    this.material = new THREE.ShaderMaterial({
      wireframe: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      vertexShader,
      fragmentShader,
      uniforms: {
        uFrequency: { value: this.settings.uFrequency.start },
        uAmplitude: { value: this.settings.uAmplitude.start },
        uDensity: { value: this.settings.uDensity.start },
        uStrength: { value: this.settings.uStrength.start },
        uDeepPurple: { value: this.settings.uDeepPurple.start },
        uOpacity: { value: this.settings.uOpacity.start },
      },
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material)

    this.scene.add(this.mesh)
  }

  /**
   * SCROLL BASED ANIMATIONS
   */
  updateScrollAnimations() {
    this.scroll.running = false
    this.scroll.normalized = (this.scroll.hard / this.scroll.limit).toFixed(1)

    GSAP.to(this.mesh.rotation, {
      x: this.scroll.normalized * Math.PI,
    })

    GSAP.to(this.elements.line, {
      scaleX: this.scroll.normalized,
      transformOrigin: 'left',
      duration: 1.5,
      ease: 'ease',
    })

    for (const key in this.settings) {
      if (this.settings[key].start !== this.settings[key].end) {
        GSAP.to(this.mesh.material.uniforms[key], {
          value:
            this.settings[key].start + this.scroll.normalized * (this.settings[key].end - this.settings[key].start),
        })
      }
    }
  }

  /**
   * EVENTS
   */
  addEventListeners() {
    // window.addEventListener('load', this.onLoad.bind(this))

    // window.addEventListener('mousemove', this.onMouseMove.bind(this))  // enable for soundcheck (→ console)

    window.addEventListener('scroll', this.onScroll.bind(this))

    window.addEventListener('resize', this.onResize.bind(this))
  }

  onLoad() {
    // document.body.classList.remove('loading')
    // this.animations = new Animations(this.element, this.camera)
  }

  // onMouseMove(event) {
  //   // play with it!
  //   // enable / disable / change x, y, multiplier …

  //   this.mouse.x = (event.clientX / this.viewport.width).toFixed(2) * 4
  //   this.mouse.y = (event.clientY / this.viewport.height).toFixed(2) * 2

  //   GSAP.to(this.mesh.material.uniforms.uFrequency, { value: this.mouse.x })
  //   GSAP.to(this.mesh.material.uniforms.uAmplitude, { value: this.mouse.x })
  //   GSAP.to(this.mesh.material.uniforms.uDensity, { value: this.mouse.y })
  //   GSAP.to(this.mesh.material.uniforms.uStrength, { value: this.mouse.y })
  //   // GSAP.to(this.mesh.material.uniforms.uDeepPurple, { value: this.mouse.x })
  //   // GSAP.to(this.mesh.material.uniforms.uOpacity, { value: this.mouse.y })

  //   console.info(`X: ${this.mouse.x}  |  Y: ${this.mouse.y}`)
  // }

  onScroll() {
    // console.log('on scroll')
    if (!this.scroll.running) {
      // console.log('on scroll true')
      window.requestAnimationFrame(this.updateScrollAnimations)

      this.scroll.running = true
    }
  }

  onResize() {
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    this.smoothScroll.onResize()

    if (this.viewport.width < this.viewport.height) {
      this.mesh.scale.set(0.75, 0.75, 0.75)
    } else {
      this.mesh.scale.set(1, 1, 1)
    }

    this.camera.aspect = this.viewport.width / this.viewport.height
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(this.viewport.width, this.viewport.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  }

  /**
   * LOOP
   */
  update() {
    const elapsedTime = this.clock.getElapsedTime()
    this.mesh.rotation.y = elapsedTime * 0.05

    this.smoothScroll.update()

    this.render()

    window.requestAnimationFrame(this.update)
  }

  /**
   * RENDER
   */
  render() {
    this.renderer.render(this.scene, this.camera)
  }
}

// new ScrollStage()

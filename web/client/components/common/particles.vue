<template>
  <client-only>
    <div
      :id="id"
      v-intersect.once="onIntersect"
      class="particles"
    />
  </client-only>
</template>

<script>
export default {
  name: 'Particles',
  props: {
    color: {
      type: String,
      default: '#D86A60'
    },
    particleOpacity: {
      type: Number,
      default: 0.4
    },
    particlesNumber: {
      type: Number,
      default: 30
    },
    shapeType: {
      type: String,
      default: 'edge'
    },
    particleSize: {
      type: Number,
      default: 4
    },
    linesColor: {
      type: String,
      default: '#D86A60'
    },
    linesWidth: {
      type: Number,
      default: 1
    },
    lineLinked: {
      type: Boolean,
      default: true
    },
    lineOpacity: {
      type: Number,
      default: 0.3
    },
    linesDistance: {
      type: Number,
      default: 150
    },
    moveSpeed: {
      type: Number,
      default: 3
    },
    hoverEffect: {
      type: Boolean,
      default: true
    },
    hoverMode: {
      type: String,
      default: 'repulse'
    },
    clickEffect: {
      type: Boolean,
      default: true
    },
    clickMode: {
      type: String,
      default: 'push'
    },
    retinaDetect: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    id: 'particles-' + Math.floor(Math.random() * 1000)
  }),
  methods: {
    onIntersect (entries, observer, isIntersecting) {
      if (isIntersecting) {
        require('particles.js')
        this.$nextTick(() => {
          this.initParticles()
        })
      }
    },
    initParticles () {
      window.particlesJS(this.id, {
        particles: {
          number: {
            value: this.particlesNumber,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: this.color
          },
          shape: {
            // circle, edge, triangle, polygon, star
            type: this.shapeType,
            stroke: {
              width: 0,
              color: '#192231'
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: this.particleOpacity,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: this.particleSize,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: this.lineLinked,
            distance: this.linesDistance,
            color: this.linesColor,
            opacity: this.lineOpacity,
            width: this.linesWidth
          },
          move: {
            enable: true,
            speed: this.moveSpeed,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: this.hoverEffect,
              mode: this.hoverMode
            },
            onclick: {
              enable: this.clickEffect,
              mode: this.clickMode
            },
            onresize: {
              enable: true,
              density_auto: true,
              density_area: 400
            }
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.6
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: this.retinaDetect
      })
    }
  }
}
</script>

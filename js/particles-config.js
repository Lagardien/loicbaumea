/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

export function Particles() {
  particlesJS(
    "particles-js",

    {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 100
          }
        },
        color: {
          value: "#fff"
        },
        shape: {
          type: "image",
          stroke: {
            width: 1,
            color: "#fff"
          },
          polygon: {
            nb_sides: 1
          },
          image: {
            src: "http://loicbaumea.com/img/avatar.png",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 100,
          random: true,
          anim: {
            enable: true,
            speed: 100,
            size_min: 100,
            sync: true
          }
        },
        line_linked: {
          enable: false,
          distance: 100,
          color: "#fff",
          opacity: 1,
          width: 1
        },
        move: {
          enable: true,
          speed: 10,
          direction: "top",
          random: true,
          straight: false,
          out_mode: "out",
          attract: {
            enable: true,
            rotateX: 100,
            rotateY: 100
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "bubble"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 250,
            line_linked: {
              opacity: 0.8
            }
          },
          bubble: {
            distance: 1000,
            size: 1,
            duration: 0.1,
            opacity: 0.8,
            speed: 1
          },
          repulse: {
            distance: 200
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover"
      }
    }
  );
}

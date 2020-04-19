// Import Highway
import Highway from "@dogstudio/highway";

// GSAP Library
import Tween from "gsap";

const $frameBlack = document.querySelector(".left-border");

// Fade
class Fade extends Highway.Transition {
  in({ from, to, done }) {
    // Reset Scroll
    window.scrollTo(0, 0);

    // Remove Old View
    from.remove();

    // Animation
    Tween.fromTo(
      $frameBlack,
      1,
      { width: "100vw" },
      {
        width: "50px",
        transformOrigin: "left",
        ease: Power4.easeInOut,
        onComplete: done,
      }
    );
  }

  out({ from, done }) {
    // Animation
    Tween.fromTo(
      $frameBlack,
      1.5,
      { width: "50px" },
      {
        width: "100vw",
        transformOrigin: "left",
        ease: Power4.easeInOut,
        onComplete: done,
      }
    );
  }
}

export default Fade;

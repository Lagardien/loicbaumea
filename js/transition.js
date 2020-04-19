// Import Highway
import Highway from "@dogstudio/highway";

// GSAP Library
import Tween from "gsap";

const $frameBlack = document.querySelector(".transition-border");

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
      { width: "100%" },
      {
        width: "0%",
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
      { width: "0%" },
      {
        width: "100%",
        transformOrigin: "left",
        ease: Power4.easeInOut,
        onComplete: done,
      }
    );
  }
}

export default Fade;

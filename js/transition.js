// // Import Highway
// import Highway from "@dogstudio/highway";

// // GSAP Library
// import { TimelineLite } from "gsap";

// // Fade
// class Fade extends Highway.Transition {
//   in({ from, to, done }) {
//     const tl = new TimelineLite();
//     tl.fromTo(to, 0.5, { left: "-100%", top: "50%" }, { left: "0%" }).fromTo(
//       to,
//       0.5,
//       { height: "2vh" },
//       {
//         height: "90vh",
//         top: "10%",
//         onComplete: function() {
//           from.remove();
//           done();
//         }
//       }
//     );
//   }

//   out({ from, done }) {
//     done();
//   }
// }

// export default Fade;

// File: fade.js
// Import Highway
import Highway from "@dogstudio/highway";

// GSAP Library
import Tween from "gsap";

// Fade
class Fade extends Highway.Transition {
  in({ from, to, done }) {
    // Reset Scroll
    window.scrollTo(0, 0);

    // Remove Old View
    from.remove();

    // Animation
    Tween.fromTo(
      to,
      0.5,
      { opacity: 0 },
      {
        opacity: 1,
        onComplete: done
      }
    );
  }

  out({ from, done }) {
    // Animation
    Tween.fromTo(
      from,
      0.5,
      { opacity: 1 },
      {
        opacity: 0,
        onComplete: done
      }
    );
  }
}

export default Fade;

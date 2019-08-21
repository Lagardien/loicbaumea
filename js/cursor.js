import TweenMax from "gsap/TweenMax";

class Cursor {
  constructor() {
    this.initDemo();
  }

  initDemo() {
    const { Back } = window;
    this.easing = Back.easeInOut.config(1.7);
    this.cursorWrapper = document.querySelector(".cursor-wrapper");
    this.innerCursor = document.querySelector(".custom-cursor__inner");
    this.outerCursor = document.querySelector(".custom-cursor__outer");

    document.addEventListener("mousemove", e => {
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    });

    const render = () => {
      TweenMax.set(this.cursorWrapper, {
        x: this.clientX,
        y: this.clientY
      });
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    this.fullCursorSize = 40;
    this.enlargeCursorTween = TweenMax.to(this.outerCursor, 0.3, {
      backgroundColor: "transparent",
      width: this.fullCursorSize,
      height: this.fullCursorSize,
      ease: this.easing,
      paused: true
    });

    this.mainNavHoverTween = TweenMax.to(this.outerCursor, 0.3, {
      backgroundColor: "#115385",
      opacity: 0.3,
      width: this.fullCursorSize,
      height: this.fullCursorSize,
      ease: this.easing,
      paused: true
    });

    const handleMouseEnter = () => {
      this.enlargeCursorTween.play();
    };

    const handleMouseLeave = () => {
      this.enlargeCursorTween.reverse();
    };

    const mainNavItems = document.querySelectorAll(".page a, .page button");
    mainNavItems.forEach(el => {
      el.addEventListener("mouseenter", () => {
        this.mainNavHoverTween.play();
      });
      el.addEventListener("mouseleave", () => {
        this.mainNavHoverTween.reverse();
      });
    });
  }
}

export default Cursor;

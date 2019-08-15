/* Loader */

$(window).on("load", function() {
  $(".loader-wrapper").fadeOut("slow");
});

/* media fade in */

$("video")
  .hide()
  .one("load", function() {
    $(this).fadeIn(500);
  })
  .each(function() {
    if (this.complete) $(this).trigger("load");
  });

/* Cursor */

import Cursor from "./cursor";

if (document.querySelector(".page")) {
  const cursor = new Cursor();
}
/* Particles */

import { Particles } from "./particles-config";
let particles = Particles();

/* Isotope */

import { Isotope } from "./isotope";

/* Transition */

// Import Highway
import Highway from "@dogstudio/highway";

// Import Transitions
import Fade from "./transition.js";

// Call Highway.Core once.
const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});

// Menu
const links = document.querySelectorAll("nav a");

// Listen the `NAVIGATE_IN` event
// This event is sent everytime a `data-router-view` is added to the DOM Tree
H.on("NAVIGATE_IN", ({ to, trigger, location }) => {
  // Check Active Link
  for (let i = 0; i < links.length; i++) {
    const link = links[i];

    // Clean class
    link.classList.remove("active");

    // Active link
    if (link.href === location.href) {
      link.classList.add("active");
    }
  }

  if (document.querySelector(".home")) {
    let particles = Particles();
  }
});

// Listen the `NAVIGATE_OUT` event
// This event is sent everytime the `out()` method of a transition is run to hide a `data-router-view`
H.on("NAVIGATE_OUT", ({ from, trigger, location }) => {});

// Listen the `NAVIGATE_END` event
// This event is sent everytime the `done()` method is called in the `in()` method of a transition
H.on("NAVIGATE_END", ({ to, from, trigger, location }) => {
  if (document.querySelector(".page")) {
    const cursor = new Cursor();
  }
  if (document.querySelector(".projects")) {
    let isotope = Isotope();
  }

  if (document.querySelector(".grid")) {
    const UniversalTilt = require("universal-tilt.js");
  }

  $("img")
    .hide()
    .one("load", function() {
      $(this).fadeIn(500);
    })
    .each(function() {
      if (this.complete) $(this).trigger("load");
    });

  $(".about-bg")
    .hide()
    .one("load", function() {
      $(this).fadeIn(500);
    })
    .each(function() {
      if (this.complete) $(this).trigger("load");
    });
});

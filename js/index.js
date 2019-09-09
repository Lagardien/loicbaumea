/* Loader */

$(window).on("load", function() {
  $(".loader-wrapper").fadeOut("slow");
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
  // Analytics
  if (typeof gtag !== "undefined") {
    // eslint-disable-next-line
    gtag("config", "UA-146068141-1", {
      page_path: location.pathname,
      page_title: to.page.title,
      page_location: location.href
    });
  }
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

  // Images fadein
  $("img")
    .hide()
    .one("load", function() {
      $(this).fadeIn("slow");
    })
    .each(function() {
      if (this.complete) $(this).trigger("load");
    });

  // About-bg fadein
  if (document.querySelector(".about")) {
    var image = new Image();
    var element = document.getElementsByClassName("about-bg")[0];

    image.onload = function() {
      element.style.backgroundImage = "url('" + this.src + "')";
      element.style.opacity = 1;
    };
    image.src =
      "https://eloquent-davinci-3d0dc2.netlify.com/about-bg.beb021b0.jpg";
    if (image.complete) image.onload();
  }

  // Particles
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

  $("img").bind("contextmenu", function(e) {
    return false;
  });
});

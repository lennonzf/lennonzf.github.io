// bower components
//= require jquery
//= require sticky-kit

//= require smooth_scroll
//= require prism
//= require prism_line_numbers

//= require headroom

// initialize smoothScroll
smoothScroll.init();

// sticky-kit for style-guide
$("#side_navigation").stick_in_parent();

// Initialise headroom.js
document.addEventListener("DOMContentLoaded", function(event) {
  var nav = document.querySelector("header");
  var headroom  = new Headroom(nav);
  headroom.init();
});

"use strict";

var startingPoint;
var header = document.querySelector('header');
header.addEventListener('mouseenter', function (e) {
  startingPoint = e.clientX;
  header.classList.add('moving');
});
header.addEventListener('mouseout', function (e) {
  header.classList.remove('moving');
  header.style.setProperty('--percentage', 0.5);
});
header.addEventListener('mousemove', function (e) {
  var percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5;
  header.style.setProperty('--percentage', percentage);
});
/* Hmmm */
document.addEventListener("mousemove", function (e) {
  var cursorTrail = document.querySelector(".cursor-trail");
  var trail = document.createElement("div");
  trail.classList.add("cursor-trail");
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  cursorTrail.appendChild(trail);
  setTimeout(function () {
    trail.remove();
  }, 1500); // Adjust the duration of the cursor trail
});
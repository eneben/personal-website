window.addEventListener("DOMContentLoaded", recalculateStyle);

window.addEventListener("resize", recalculateStyle);

function recalculateStyle() {
  var headerHeight = document.querySelector("header").offsetHeight;
  document.querySelector("main").style.marginTop = headerHeight + "px";
}

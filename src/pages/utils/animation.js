export default function init() {
 let element = document.querySelectorAll(".animation");
 function fadeIn(elem) {
  if (elem == null) return;
  var distInView = elem.getBoundingClientRect().top - window.innerHeight;
  if (distInView) {
   elem.classList.add("__animation");
   if (distInView < 0) {
    elem.classList.add("active");
   } else {
    elem.classList.remove("active");
   }
  }
 }
 window.addEventListener("scroll", function () {
  for (var i = 0; i < element.length; i++) {
   if (typeof element[i] == "undefined") continue;
   fadeIn(element[i]);
  }
 });
}

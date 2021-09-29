"use strict"

window.onscroll = function() {
    myFunction1()
  };

function myFunction1() {
if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
  document.getElementById("nav-bar").classList.remove("navigation");


} else {
  document.getElementById("nav-bar").classList.add("navigation");

}
}













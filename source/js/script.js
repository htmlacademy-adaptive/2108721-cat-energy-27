let navMain = document.querySelector(".nav");
let navButton = document.querySelector(".header__button");

navMain.classList.remove("nav--nojs");

if (navMain.classList.contains("nav")) {
  navMain.classList.add("nav--closed");
}

navButton.addEventListener(
  "click",
  function () {
    if (navMain.classList.contains("nav--closed")) {
      navMain.classList.remove("nav--closed");
      navMain.classList.add("nav--opened");
    } else {
      navMain.classList.add("nav--closed");
      navMain.classList.remove("nav--opened");
    }
  },
  {
    passive: true,
  }
);

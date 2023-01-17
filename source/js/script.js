let navMain = document.querySelector('.header-nav');
let navButton = document.querySelector('.header__button');

navMain.classList.remove('header-nav--nojs');

if (navMain.classList.contains('header-nav')) {
  navMain.classList.add('header-nav--closed');
}

navButton.addEventListener(
  'click',
  function () {
    if (navMain.classList.contains('header-nav--closed')) {
      navMain.classList.remove('header-nav--closed');
      navMain.classList.add('header-nav--opened');
    } else {
      navMain.classList.add('header-nav--closed');
      navMain.classList.remove('header-nav--opened');
    }
  },
  {
    passive: true,
  }
);

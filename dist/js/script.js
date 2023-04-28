// navbarScroll

window.scroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};


// humberger

const humberger = document.querySelector('#humberger');

humberger.addEventListener('click', function () {
  humberger.classList.toggle('humberger-active')
});

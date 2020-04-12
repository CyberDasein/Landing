"use strict";

(function () {
  var btn = document.getElementById('toggleBtn');
  var menu = document.getElementById('toggleMenu');
  var toggleClass = 'show';
  var scrollBtn = document.getElementById('upButton');

  function toggleMenu(event) {
    event.preventDefault();
    menu.classList.toggle(toggleClass);
  }

  btn.addEventListener('click', toggleMenu);
  document.addEventListener('click', clickOutside);
  scrollBtn.addEventListener('click', smoothJumpUp);

  function clickOutside(event) {
    var target = event.target;
    var its_menu = target == menu || menu.contains(target);
    var menu_is_active = menu.classList.contains(toggleClass);
    var its_btn = target == btn;

    if (!its_menu && !its_btn && menu_is_active) {
      menu.classList.remove(toggleClass);
    }
  }

  function smoothJumpUp() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -50);
      setTimeout(smoothJumpUp, 20);
    }
  }

  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 100) {
      document.getElementById('upButton').style.display = 'block';
    } else {
      document.getElementById('upButton').style.display = 'none';
    }
  };
})();
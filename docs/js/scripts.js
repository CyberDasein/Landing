"use strict";

$(document).ready(function () {
  $('.fancybox').fancybox({
    openEffect: 'none',
    closeEffect: 'none'
  });
});
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
"use strict";

$(document).ready(function () {
  $('[data-slider = "pricingSlider"]').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    adaptiveHeight: true,
    skidesToScroll: 1,
    variablewidth: true,
    autoplay: true,
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    }, {
      breakpoint: 380,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }]
  });
  $('[data-slider = "partnersSlider"]').slick({
    arrows: false,
    dots: false,
    slidesToShow: 4,
    adaptiveHeight: false,
    skidesToScroll: 0,
    centerMode: false,
    variablewidth: true,
    autoplay: false,
    responsive: [{
      breakpoint: 769,
      settings: {
        dots: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    }, {
      breakpoint: 380,
      settings: {
        arrows: false,
        dots: true,
        centerMode: true,
        adaptiveHeight: false,
        centerPadding: '35px',
        slidesToShow: 1,
        skidesToScroll: 1
      }
    }]
  });
});
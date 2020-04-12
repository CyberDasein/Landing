(function() {
  const btn = document.getElementById('toggleBtn');
  const menu = document.getElementById('toggleMenu');
  const toggleClass = 'show';
  const scrollBtn = document.getElementById('upButton');

  function toggleMenu(event) {
    event.preventDefault();
    menu.classList.toggle(toggleClass);
  }

  btn.addEventListener('click', toggleMenu);

  document.addEventListener('click', clickOutside);

  scrollBtn.addEventListener('click', smoothJumpUp);

  function clickOutside(event) {
    let target = event.target;
    let its_menu = target == menu || menu.contains(target);
    let menu_is_active = menu.classList.contains(toggleClass);
    let its_btn = target == btn;
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

  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
      document.getElementById('upButton').style.display = 'block';
    } else {
      document.getElementById('upButton').style.display = 'none';
    }
  };
})();

$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    loop: true,
    // margin: 5,
    autoplay: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 4000,
    // autoplayHoverPause: true,
    speed: 12000,
    responsiveClass: true,
    items: 1,
  })

})





const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true
  }
  else {
    menuBtn.classList.remove('open');
    menuOpen = false
  }
})



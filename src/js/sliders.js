$(document).ready(function () {
  $('[data-slider = "pricingSlider"]').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    adaptiveHeight: true,
    skidesToScroll: 1,
    variablewidth: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 380,
        settings: {
          arrows: false,
          dots: true,
          centerMode: true,
          adaptiveHeight: false,
          centerPadding: '35px',
          slidesToShow: 1,
          skidesToScroll: 1,
        },
      },
    ],
  });
});

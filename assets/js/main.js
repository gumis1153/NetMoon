$('#headerMenuBtn').on('click', function () {
  $(this).toggleClass('open');
  $('#menu').toggleClass('open');
});

// change img to svg
const injectableImgs = document.querySelectorAll('.injectable');
injectableImgs.forEach((i) => {
  SVGInject(i);
});

var homeSwiper = new Swiper('.home__swiper', {
  slidesPerView: 1,
  loop: true,
  watchSlidesVisibility: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.home__swiper-pagination',
    clickable: true,
  },

  // navigation: {
  //   nextEl: '.home__swiper-next',
  //   prevEl: '.home__swiper-prev',
  // },
});

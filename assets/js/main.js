$('#headerMenuBtn').on('click', function () {
  $(this).toggleClass('open');
  $('#menu').toggleClass('open');
});

// change img to svg
const injectableImgs = document.querySelectorAll('.injectable');
injectableImgs.forEach((i) => {
  SVGInject(i);
});
if ($('.home-swiper__mobile-carousel')) {
  const homeSwiper = new Swiper('.home-swiper__mobile-carousel', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

const blogMasonry = new Masonry(document.querySelector('.blog__masonry'), {
  itemSelector: '.blog__masonry .blog-list__item',
  gutter: 45,
});

const arrowDown = document.querySelector('.arrow-down');
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  if (window.pageYOffset) {
    arrowDown.classList.add('hide');
    header.classList.add('active');
  } else {
    arrowDown.classList.remove('hide');
    header.classList.remove('active');
  }
});

if (document.querySelector('#budget input')) {
  const contactBudgetCheckbox = document.querySelector('#budget input');
  const contactRangeInput = document.querySelector('#contactRange');

  contactBudgetCheckbox.addEventListener('click', function () {
    console.log(this.checked);
    if (this.checked) {
      contactRangeInput.classList.add('active');
    } else {
      contactRangeInput.classList.remove('active');
    }
  });
}

if ($('.cards__swiper')) {
  const aboutCardSwiper = new Swiper('.cards__swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,

    breakpoints: {
      992: {
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  });
}

if ($('.feature-list-5__list')) {
  const aboutCardSwiper = new Swiper('.feature-list-5__list', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,

    breakpoints: {
      992: {
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false,
        spaceBetween: 30,
      },
    },
  });
}

if ($('.feature-list-4__list')) {
  const aboutCardSwiper = new Swiper('.feature-list-4__list', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.feature-list-4__list-pagin',
      type: 'bullets',
      clickable: true,
    },

    breakpoints: {
      992: {
        slidesPerView: 3,
        allowTouchMove: false,
        spaceBetween: 30,
      },
    },
  });
}

if ($('.feature-list-1__swiper')) {
  const aboutCardSwiper = new Swiper('.feature-list-1__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    width: 200,
    loop: true,

    breakpoints: {
      1200: {
        slidesPerView: 13,
        allowTouchMove: false,
        loop: false,
        spaceBetween: 0,
        width: 200,
      },
    },
  });
}

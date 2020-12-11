const swiper = document.querySelector('.home-swiper__desktop-swiper');
const swipes = document.querySelectorAll('.home-swiper__desktop-swiper-item');
const dots = document.querySelectorAll('.home-swiper__desktop-swiper-dot');
const pagination = document.querySelector('.home-swiper__desktop-swiper-pagination');

function changeDot(index) {
  dots.forEach((i) => {
    i.classList.remove('active');
  });
  dots[index - 1].classList.add('active');
}

function scroll(index) {
  console.log(swipes[index - 1]);

  $('html, body').animate(
    {
      scrollTop: $(swipes[index - 1]).offset().top - 200,
    },
    500
  );
}

window.addEventListener('scroll', function () {
  let currentSwipe = '';

  swipes.forEach((i) => {
    const position = i.getBoundingClientRect();
    let isShowed = position.top - 400;
    let after = position.top + position.height - 400;

    if (isShowed < 0) {
      i.childNodes[1].classList.add('active');
      i.childNodes[3].classList.add('active');
      currentSwipe = i.dataset.index;
      changeDot(i.dataset.index);
    }
    if (isShowed < 0 && after < 0) {
      i.childNodes[1].classList.remove('active');
      i.childNodes[3].classList.remove('active');
    }
    if (isShowed > 0) {
      i.childNodes[1].classList.remove('active');
      i.childNodes[3].classList.remove('active');
      pagination.classList.remove('active');
    }
  });

  const swiperPosition = swiper.getBoundingClientRect();
  let swiperTop = swiperPosition.top - 400;
  let afterSwiper = swiperPosition.top + swiperPosition.height - 400;

  if (swiperTop < 0) {
    pagination.classList.add('active');
  }
  if (swiperTop < 0 && afterSwiper < 0) {
    pagination.classList.remove('active');
  }

  //   console.log(swiperTop);
});

dots.forEach((i) => {
  i.addEventListener('click', function () {
    scroll(i.dataset.index);
    console.log(i);
  });
});

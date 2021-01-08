"use strict";

// "use strict";
$("#headerMenuBtn").on("click", function () {
  $(this).toggleClass("open");
  $("#menu").toggleClass("open");
  $(".header__blur").toggleClass("open");
}); // change img to svg

const injectableImgs = document.querySelectorAll(".injectable");
injectableImgs.forEach(i => {
  SVGInject(i);
});

if ($(".home-swiper__mobile-carousel").length > 0) {
  const homeSwiper = new Swiper(".home-swiper__mobile-carousel", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
}

if ($(".blog__masonry").length > 0) {
  const blogMasonry = new Masonry(document.querySelector(".blog__masonry"), {
    itemSelector: ".blog__masonry .blog-list__item",
    gutter: 45
  });
}

const mathHeight = function () {
  const section = $(".feature-list-1__control");
  const swiperHeight = $(".feature-list-1__desktop-swiper .swiper-slide").height();
  section.css("height", swiperHeight);
};

if ($(".feature-list-1__control").length > 0) {
  mathHeight();
}

function mathHeight2() {
  const control = $(".main-swiper__control");
  const swiper = $(".main-swiper");
  const height = swiper.height();
  const homePadding = $(".home").css("paddingTop");
  control.css("paddingTop", homePadding).css("height", height);
}

;

if ($(".main-swiper__control").length > 0) {
  mathHeight2();
}

$(window).on("resize", function () {
  mathHeight();
  mathHeight2();
});
const arrowDown = document.querySelector(".arrow-down");
const header = document.querySelector(".header");

if ($(arrowDown).length > 0) {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset) {
      arrowDown.classList.add("hide");
      header.classList.add("active");
    } else {
      arrowDown.classList.remove("hide");
      header.classList.remove("active");
    }
  });
}

if (document.querySelector("#budget input")) {
  const contactBudgetCheckbox = document.querySelector("#budget input");
  const contactRangeInput = document.querySelector("#contactRange");
  contactBudgetCheckbox.addEventListener("click", function () {
    if (this.checked) {
      contactRangeInput.classList.add("active");
    } else {
      contactRangeInput.classList.remove("active");
    }
  });
}

if ($(".main-swiper")) {
  const mainSwiper = new Swiper(".main-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 600,
    effect: "cube",
    pagination: {
      el: ".main-swiper__pagination",
      type: "bullets",
      clickable: true
    },
    navigation: {
      nextEl: ".main-swiper__next",
      prevEl: ".main-swiper__prev"
    }
  });
}

if ($(".cards__swiper")) {
  const cardsSwiper = new Swiper(".cards__swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false,
        spaceBetween: 0
      }
    }
  });
}

if ($(".feature-list-5__list")) {
  const feature5Swiper = new Swiper(".feature-list-5__list", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 3,
        loop: false,
        allowTouchMove: false,
        spaceBetween: 30
      }
    }
  });
}

if ($(".feature-list-4__list")) {
  const feature4Swiper = new Swiper(".feature-list-4__list", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".feature-list-4__list-pagin",
      type: "bullets",
      clickable: true
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        allowTouchMove: false,
        spaceBetween: 30
      }
    }
  });
}

if ($(".feature-list-1__desktop-swiper").length > 0) {
  const feature1Swiper = new Swiper(".feature-list-1__desktop-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".feature-list-1__desktop-swiper-prev",
      prevEl: ".feature-list-1__desktop-swiper-next"
    },
    pagination: {
      el: ".feature-list-1__pagination",
      clickable: true
    } 
  });

  const softwareButton = $("#SHButton");
  const marketingButton = $("#MAButton");
  const shItem = document.querySelector(".sh");
  const maItem = document.querySelector(".ma");
  const shIndex = shItem.getAttribute("aria-label").split("/")[0];
  const maIndex = maItem.getAttribute("aria-label").split("/")[0];
  const maSliderIndex = maIndex - 1;
  const shSliderIndex = shIndex - 1;

  function changeMark() {
    const lastItem = feature1Swiper.slides[feature1Swiper.slides.length - 1];
    const lastItemIndex = lastItem.getAttribute("aria-label").split("/")[0];

    if (feature1Swiper.realIndex == maSliderIndex) {
      marketingButton.addClass("active");
      softwareButton.removeClass("active"); // marketingButton.siblings().removeClass("active");
    } else if (feature1Swiper.realIndex != maSliderIndex) {
      marketingButton.removeClass("active");
      softwareButton.addClass("active");
    }
  }

  feature1Swiper.on("slideChange", function () {
    changeMark();
  });
  softwareButton.on("click", function (e) {
    e.preventDefault();
    feature1Swiper.slideTo(shSliderIndex);
    const hasClass = $(this).hasClass("active");

    if (!hasClass) {
      $(this).addClass("active");
      marketingButton.removeClass("active");
    }
  });
  marketingButton.on("click", function (e) {
    e.preventDefault();
    feature1Swiper.slideTo(maSliderIndex);
    const hasClass = $(this).hasClass("active");

    if (!hasClass) {
      $(this).addClass("active");
      softwareButton.removeClass("active");
    }
  });
}

if ($(".stats__slider-inner").length > 0) {
  const statsSwiper = new Swiper(".stats__slider-inner", {
    slidesPerView: 1,
    spaceBetween: 30,
    initialSlide: 1,
    loop: true,
    duration: 1000,
    navigation: {
      nextEl: ".stats__slider-next",
      prevEl: ".stats__slider-prev"
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        centeredSlides: true,
        centeredSlidesBounds: false,
        spaceBetween: 0
      }
    }
  });
}

if ($(".coop__slider")) {
  const coopSwiper = new Swiper(".coop__slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000
    },
    breakpoints: {
      576: {
        spaceBetween: 0
      },
      768: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 5
      },
      1440: {
        slidesPerView: 7
      }
    }
  });
}

if ($(".team__list")) {
  const teamSwiper = new Swiper(".team__list", {
    slidesPerView: 2,
    slidesPerColumn: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".team__list-next",
      prevEl: ".team__list-prev"
    },
    pagination: {
      el: ".team__list-pagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerColumn: 3
      },
      1200: {
        cssMode: true,
        slidesPerView: "auto",
        slidesPerColumn: "auto",
        allowTouchMove: false
      }
    }
  });
}

$("#myRange").on("input", function () {
  $("#rangeValue").text($("#myRange").val());
});
AOS.init({
  duration: 600,
  once: true
});

if ($(".stats__list").length > 0) {
  const numbers = $(".stats__item-number");
  const options = {
    startVal: 0,
    // number to start at (0)
    duration: 5 // animation duration in seconds (2)

  };
  const countUp1 = new CountUp("statsItemValue1", numbers[0].textContent, options);

  if (!countUp1.error) {} else {
    console.error(countUp1.error);
  }

  const countUp2 = new CountUp("statsItemValue2", numbers[1].textContent, options);

  if (!countUp2.error) {} else {
    console.error(countUp2.error);
  }

  const countUp3 = new CountUp("statsItemValue3", numbers[2].textContent, options);

  if (!countUp3.error) {} else {
    console.error(countUp3.error);
  }

  const countUp4 = new CountUp("statsItemValue4", numbers[3].textContent, options);

  if (!countUp4.error) {} else {
    console.error(countUp4.error);
  }

  $(window).on("scroll", function () {
    if ($(".stats__list").offset().top < $(window).scrollTop() + $(window).height() / 1.5) {
      countUp1.start();
      countUp2.start();
      countUp3.start();
      countUp4.start();
    }
  });
}
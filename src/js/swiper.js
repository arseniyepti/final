// let body = document.querySelector('body');


if (document.documentElement.clientWidth <= '768') {

  var a = new Swiper('#swiper-nav', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  })

  var b = new Swiper('#swiper-brands', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  })

  var c = new Swiper('#swiper-fix-technic', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  })

  var d = new Swiper('#swiper-prices', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  })

}

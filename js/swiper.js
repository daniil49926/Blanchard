const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


const swiper2 = new Swiper('.swiper-container2', {
    loop: true,

    pagination: {
      el: '.swiper-pagination2'
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});
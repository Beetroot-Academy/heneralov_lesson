document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide("#hero-splide", {
    perPage: 1,
    perMove: 1,
    type: "loop",
    autoplay: true,
    interval: 2500,
    arrows: false,
    cover: true,
    height: "700px",
    pauseOnHover: false,
    

    
  });
  splide.mount();



  let secondSplide = new Splide("#arrivals-splide", {
    perPage: 5,
    perMove: 1,
    type: "loop",
    cover: true,
    autoplay: true,
    interval: 2500,
    pagination: false,
    pauseOnHover: false,
    breakpoints: {
      767: {
        perPage: 1,
        arrows: false,
        pagination: true,
      },
      1319: {
        perPage: 3,
        gap: '15px',
        
      },
    },
    
    
    
  });
  secondSplide.mount();

  let thirdSplide = new Splide("#partners-splide", {
    perPage: 9,
    perMove: 1,
    type: "loop",
    pagination: false,
    pauseOnHover: false,
    direction: 'ltr',

    breakpoints: {
      767: {
        perPage: 2,
        arrows: false,
        pagination: true,
      },
      1319: {
        perPage: 6,
        gap: '15px',
        
      },
    },
    
  });
  thirdSplide.mount();
});

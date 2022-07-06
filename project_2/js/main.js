document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide( '#header-splide', {
        direction: 'ttb',
        type: 'loop',
        arrows: false,
        autoplay: true,
        interval: 2500,
        paginationDirection: 'ttb',
        height: '70vh',
        pauseOnHover: false,
    } );
    splide.mount();
  } );

  document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide( '#news-splide' , {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: '45px',
        autoplay: true,
        interval: 2500,
        pauseOnHover: false,
        
    } );
    splide.mount();
  } );

 




const showMap = document.getElementById('map');
function initMap() {
  const myLatLng = {lat: -28.397, lng: 120.644};
  map = new google.maps.Map(document.getElementById("map"), {
    disableDefaultUI:true,
    center: myLatLng,
    zoom: 8,
    
    
  });
  const image = new google.maps.MarkerImage('../assets/images/Pin.svg');
  new google.maps.Marker({
    position: myLatLng,
    map,
    animation: google.maps.Animation.BOUNCE,
    icon: image,
    title: "kek",
  });
}

window.initMap = initMap;




document.documentElement.style.scrollBehavior = "smooth";




let submitBtn = document.querySelector(".form__btn");
let formTest = document.querySelector(".form");
let nameInput = document.querySelector(".form__nameinput");
let mailInput = document.querySelector(".form__mailinput");
submitBtn.addEventListener("click" , function() {
  let getMail;
  getMail = mailInput.value;
  let getName;
  getName = nameInput.value;
  alert("Your name: " + getName);
  alert("Your email: " + getMail);
});

let body = document.querySelector("body");
let image = document.querySelectorAll('.gal-img');
let num;
let galSplide;
let chooseEl;
image.forEach((e) => {
  e.addEventListener('click', openModal);
  function openModal() {
    num = Number(e.id);
    chooseEl = document.querySelector(".modal");
    chooseEl.classList.add('active');
    galSplide = new Splide( '#gal-splide', {
      type: 'loop',
      start: num,
      height: '75vh',
      width: '100vh',
      autowidth: true,
  } );
  galSplide.mount();
}
  
});


let icon = document.querySelector(".modal__icon")
icon.addEventListener('click', close);
function close () {
  chooseEl = document.querySelector(".modal");
  chooseEl.classList.remove('active');
  galSplide.destroy();

}

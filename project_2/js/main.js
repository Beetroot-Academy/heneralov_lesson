document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide( '#header-splide', {
        direction: 'ttb',
        type: 'loop',
        arrows: false,
        autoplay: true,
        interval: 2500,
        paginationDirection: 'ttb',
        height: '100vh',
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

/*  function gallery () {
let imagesList = document.querySelector(".images-block");
 = document.getElementById("#secondimg");
imagesList.addEventListener("click", function() {
  image.classList.toggle("test");
});

}
gallery()  */

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

let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

function addPlayList(playList) {
  let list = document.querySelector(".first-section");
  let songList = document.createElement("ol");
  list.append(songList);

  playList.forEach((element) => {
    let listItem = document.createElement("li");
    listItem.textContent = `${element.author} - ${element.song}`;
    songList.append(listItem);
  });
}

addPlayList(playList);

function openWindow() {
  let openButton = document.querySelector(".open-btn");
  let modalWindow = document.querySelector(".modal-window");
  let closeButton = document.querySelector(".close-btn");

  openButton.addEventListener("click", function () {
    modalWindow.classList.toggle("active");
  });

  closeButton.addEventListener("click", function () {
    modalWindow.classList.toggle("active");
  });
}

openWindow();

let redLight = document.querySelector(".red");
let yellowLight = document.querySelector(".yellow");
let greenLight = document.querySelector(".green");
let colorButton = document.querySelector(".traffic-btn");
let counter = 0;
function changeColor() {
  colorButton.addEventListener("click", function () {
    if (counter === 0) {
      redLight.classList.add("red__active");
      counter++;
      return;
    } else if (counter === 1) {
      redLight.classList.remove("red__active");
      yellowLight.classList.add("yellow__active");
      counter++;
      return;
    } else if (counter === 2) {
      yellowLight.classList.remove("yellow__active");
      greenLight.classList.add("green__active");
      counter++;
      return;
    } else {
      greenLight.classList.remove("green__active");
      redLight.classList.add("red__active");
      counter = 1;
      return;
    }
  });
}

changeColor();

// JavaScript Document

const images = [
  "images/emma3.jpg",
  "images/emma2.jpg",
  "images/mewmyemmapull.jpg"
];

let current = 0;
const emmaPhoto = document.getElementById("emma-photo");

function fadeImage() {
  emmaPhoto.style.opacity = 0;

  setTimeout(() => {
    current = (current + 1) % images.length;
    emmaPhoto.src = images[current];
    emmaPhoto.style.opacity = 1;
  }, 500);
}

setInterval(fadeImage, 3000);
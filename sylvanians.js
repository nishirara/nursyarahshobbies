// JavaScript untuk gambar fade in/fade out
const images = [
  "images/sylvanians1.jpg",
  "images/sylvanians2.jpg",
  "images/sylvanians3.jpg",
  "images/meatsylvanian.jpg"
];

let current = 0;
const photo = document.getElementById("sylvanians-photo");

function fadeImage() {
  photo.style.transition = "opacity 0.8s ease";
  photo.style.opacity = 0;

  setTimeout(() => {
    current = (current + 1) % images.length;
    photo.src = images[current];
    photo.style.opacity = 1;
  }, 600);
}

setInterval(fadeImage, 3000);
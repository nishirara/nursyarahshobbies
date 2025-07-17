const img = document.querySelector(".figurine-img");

const images = [
  "images/skullpanda1.jpg",
  "images/skullpanda2.jpg",
  "images/skullpandamenaleesha2.jpg",
  "images/skullpandamenaleesha.jpg"
];

let index = 0;

function changeImage() {
  img.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    img.src = images[index];
    img.style.opacity = 1;
  }, 600);
}

setInterval(changeImage, 3000);
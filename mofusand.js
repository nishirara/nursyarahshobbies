const mofusandImages = [
  "images/mofusands1.jpg",
  "images/mofusands2.jpg",
  "images/mewmofusand.jpg",
	"images/mewmofusand2.jpg"
];

let index = 0;
const photo = document.getElementById("mofusand-photo");

photo.style.transition = "opacity 1s ease-in-out";

setInterval(() => {
  photo.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % mofusandImages.length;
    photo.src = mofusandImages[index];
    photo.style.opacity = 1;
  }, 500);
}, 3000);
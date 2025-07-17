const images = [
  "images/me.jpg",
  "images/meshopping.jpg",
  "images/meatablindboxsection.jpg"
];

let current = 0;
const profilePhoto = document.getElementById("profile-photo");

function fadeImage() {
  profilePhoto.style.opacity = 0;

  setTimeout(() => {
    current = (current + 1) % images.length;
    profilePhoto.src = images[current];
    profilePhoto.style.opacity = 1;
  }, 500);
}

// Mula tukar setiap 3 saat
setInterval(fadeImage, 3000);
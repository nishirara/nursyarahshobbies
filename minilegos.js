const legoImage = document.getElementById('lego-fade');

const legoImages = [
  'images/minilegos2.jpg',
  'images/minilegos1.jpg',
  'images/minilegos3.jpg'
];

let legoIndex = 0;

function fadeLegos() {
  legoImage.style.opacity = 0;

  setTimeout(() => {
    legoIndex = (legoIndex + 1) % legoImages.length;
    legoImage.src = legoImages[legoIndex];
    legoImage.style.opacity = 1;
  }, 600);
}

setInterval(fadeLegos, 3000);
const eleSlider = document.querySelector(".container");
const eleArrDn = document.querySelector(".arrow-up");
const eleArrUp = document.querySelector(".arrow-down");
const arrImages = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

for (let i = 0; i < arrImages.length; i++) {
  const eleImg = document.createElement("img");
  eleImg.src = arrImages[i];
  eleImg.classList.add("slider-img");

  eleSlider.append(eleImg);
}

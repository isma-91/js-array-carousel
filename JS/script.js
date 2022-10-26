const eleSlider = document.querySelector(".container");
const eleArrDn = document.querySelector(".arrow-down");
const eleArrUp = document.querySelector(".arrow-up");
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

  if (i === 0) {
    eleImg.classList.add("visible");
  }

  eleSlider.append(eleImg);
}

let visibleValue = 0;

const listImgs = document.querySelectorAll(".slider-img");

eleArrDn.addEventListener("click", function () {
  listImgs[visibleValue].classList.remove("visible");

  visibleValue++; //visibleValue = visibleValue + 1

  listImgs[visibleValue].classList.add("visible");

  eleArrUp.classList.remove("hidden");
  // if (visibleValue === listImgs.length - 1) {
  //   eleArrDn.classList.add("hidden");
  // }

  if (visibleValue > listImgs.length) {
    visibleValue = 0;
    listImgs[visibleValue].classList.add("visible");
  }
});

eleArrUp.addEventListener("click", function () {
  listImgs[visibleValue].classList.remove("visible");

  visibleValue--; //visibleValue = visibleValue + 1

  listImgs[visibleValue].classList.add("visible");

  // if (visibleValue === 0) {
  //   eleArrUp.classList.add("hidden");
  // }
  // if ((visibleValue = 0)) {
  //   listImgs[visibleValue].classList.remove("visible");
  //   listImgs[(visibleValue = 4)].classList.add("visible");
  // }
  eleArrDn.classList.remove("hidden");
});

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".slider");
let listDom = document.querySelector(".slider .list");
let thumbnailDom = document.querySelector(".slider .thumbnail");

nextDom.onclick = function () {
  showSlider("next");
};
prevDom.onclick = function () {
  showSlider("prev");
};

let timeRunning = 3000;
let timeAutoNext = 13000;

let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".slider .list .item");
  let itemThumbnail = document.querySelectorAll(".slider .thumbnail .item");

  if (type === "next") {
    listDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add("next");
  } else {
    let last = itemSlider.length - 1;
    listDom.prepend(itemSlider[last]);
    thumbnailDom.prepend(itemThumbnail[last]);
    carouselDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);
}

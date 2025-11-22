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

// buat fullscreen

// tekan F untuk fullscreen
document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() === "f") {
    openFullscreen();
  }
});


// exit fullscreen otomatis kalau user tekan ESC
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    exitFullscreen();
  }
});


function openFullscreen() {
  let elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

// MOBILE FULLSCREEN FEATURE
let enterFsBtn = document.getElementById("enterFs");
let exitFsBtn = document.getElementById("exitFs");

// OPEN FS
enterFsBtn?.addEventListener("click", () => {
  openFullscreen();
  enterFsBtn.classList.add("hidden");
  exitFsBtn.classList.remove("hidden");
});

// EXIT FS
exitFsBtn?.addEventListener("click", () => {
  exitFullscreen();
  exitFsBtn.classList.add("hidden");
  enterFsBtn.classList.remove("hidden");
});

// FS functions
function openFullscreen() {
  let elem = document.documentElement;
  if (elem.requestFullscreen) elem.requestFullscreen();
  else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
}

function exitFullscreen() {
  if (document.exitFullscreen) document.exitFullscreen();
  else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
}


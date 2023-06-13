document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(
    '[data-collapse-toggle="navbar-default"]'
  );
  const menu = document.querySelector("#navbar-default");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});

let slideIndex = 0;
let slideTime = 4000; // スライドが切り替わる時間（ミリ秒）
let timer;

let slides = document.querySelectorAll("[data-carousel-item]");

function showSlide(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("opacity-0");
    slides[i].classList.remove("opacity-100");
    slides[i].classList.remove("translate-x-0");
    slides[i].classList.add("-translate-x-full");
  }

  slides[slideIndex].classList.remove("opacity-0");
  slides[slideIndex].classList.add("opacity-100");
  slides[slideIndex].classList.remove("-translate-x-full");
  slides[slideIndex].classList.add("translate-x-0");
}

function autoCarousel() {
  showSlide(slideIndex + 1);
  timer = setTimeout(autoCarousel, slideTime); // 次のスライドへの切り替えをスケジュール
}

function nextSlide() {
  clearTimeout(timer);
  showSlide(slideIndex + 1);
  timer = setTimeout(autoCarousel, slideTime);
}

function prevSlide() {
  clearTimeout(timer);
  showSlide(slideIndex - 1);
  timer = setTimeout(autoCarousel, slideTime);
}

// イベントリスナーを追加
document
  .querySelector("[data-carousel-next]")
  .addEventListener("click", nextSlide);
document
  .querySelector("[data-carousel-prev]")
  .addEventListener("click", prevSlide);

// 初期スライドを表示
showSlide(slideIndex);
autoCarousel(); // スクリプトのロード時にカルーセルを開始

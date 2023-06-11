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

function autoCarousel() {
  let i;
  let slides = document.querySelectorAll("[data-carousel-item]");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(autoCarousel, slideTime); // 次のスライドへの切り替えをスケジュール
}

autoCarousel(); // スクリプトのロード時にカルーセルを開始

let slides = document.querySelectorAll("[data-carousel-item]");

function showSlide(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function nextSlide() {
  showSlide((slideIndex += 1));
  slideTime = 4000;
}

function prevSlide() {
  showSlide((slideIndex -= 1));
  slideTime = 4000;
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

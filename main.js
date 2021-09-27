"use strict";

let btnPrev = document.querySelector(".prev"),
  btnNext = document.querySelector(".next"),
  slides = Array.from(document.querySelectorAll(".slide")),
  crntSlide = 0;

btnPrev.onclick = function () {
  crntSlide == 0 ? (crntSlide = slides.length - 1) : crntSlide--;
  changeSlide();
};
btnNext.onclick = function () {
  crntSlide == slides.length - 1 ? (crntSlide = 0) : crntSlide++;
  changeSlide();
};

function changeSlide() {
  slides.forEach((s) => {
    s.classList.remove("active");
  });

  slides[crntSlide].classList.add("active");
}

"use strict";

const video = document.getElementById('video');
const textVideo = document.getElementById('titre_accueil');
const nav = document.getElementById('nav_responsive');
const galerie = document.getElementById('galerie');

if (video != null) {
    video.addEventListener("timeupdate", function () {
        if (this.currentTime >= 9.5) {
            video.pause();
            textVideo.style.visibility = "visible";
            textVideo.style.animationName = "fade";
            textVideo.style.opacity = 1;
            document.getElementsByTagName('span')[0].style.animationName = "boom";
            document.getElementsByTagName('span')[1].style.animationName = "boom";
        }
    });
}

function openNav() {
    document.getElementById("nav_responsive").style.width = "250px";
}

function closeNav() {
    document.getElementById("nav_responsive").style.width = "0";

}

let find = function () {
    let recherche, filtre, li, alt, i;
    recherche = document.getElementById('recherche');
    filtre = recherche.value.toUpperCase();
    li = galerie.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        alt = li[i].childNodes[0].alt;
        if (alt.toUpperCase().indexOf(filtre) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

recherche.addEventListener('keydown', find, false);
recherche.addEventListener('keyup', find, false);

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("planetes");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
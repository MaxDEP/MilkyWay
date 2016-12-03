"use strict";

const video = document.getElementById('video');
const textVideo = document.getElementById('titre_accueil');
const nav = document.getElementById('nav_responsive');

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

var event = document.addEventListener("click", function () {
    closeNav();
});
event.stopPropagation();
function openNav() {
    document.getElementById("nav_responsive").style.width = "250px";
    //event.
}

function closeNav() {
    document.getElementById("nav_responsive").style.width = "0";
    event.stopPropagation();
}
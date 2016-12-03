"use strict";

let video = document.getElementById('video');
let textVideo = document.getElementById('titre_accueil');

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

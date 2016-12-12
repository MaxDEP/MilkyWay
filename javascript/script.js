"use strict";

const video = document.getElementById('video');
const textVideo = document.getElementById('titre_accueil');
const nav = document.getElementById('nav_responsive');
const recherche = document.getElementById('recherche');
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

function setFirstImg(alt){
    
}

find = function () {
    for(let i = 0; i < galerie.children.length; i++){
        if(galerie.children[i].childNodes[0].alt == recherche.value && galerie.children[i].className != "first"){
            galerie.children[i].className += "first";
        }else if(galerie.children[i].className == "first"){
            galerie.children[i].className = "";
        }
    }
};

recherche.addEventListener('keydown', find, false);
recherche.addEventListener('keyup', find, false);
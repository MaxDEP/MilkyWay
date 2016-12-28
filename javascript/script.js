"use strict";

/* Gestion Temps vidéo et affichage titre */

const video = document.getElementById('video');
let textVideo = document.getElementById('titre_accueil');

if (video != null) {
    video.addEventListener("timeupdate", function () {
        if (this.currentTime >= 9.5) {
            video.pause();
            textVideo.style.visibility = "visible";
            textVideo.style.animationName = "fade";
            textVideo.style.opacity = 1;
        }
    });
}

/* Gestion ouverture menu responsive */

const nav = document.getElementById('nav_responsive');

function openNav() {
    document.getElementById("nav_responsive").style.width = "250px";
}

function closeNav() {
    document.getElementById("nav_responsive").style.width = "0";

}

/* Gestion barre de recherche galerie */
const galerie = document.getElementById('galerie');
const recherche = document.getElementById('recherche');


let find = function () {
    let filtre, boxs, alt, i, li;
    filtre = recherche.value.toUpperCase();
    li = galerie.getElementsByTagName('li');
    boxs = galerie.getElementsByClassName('box-img');

    for (i = 0; i < boxs.length; i++) {
        alt = boxs[i].childNodes[1].alt;
        if (alt.toUpperCase().indexOf(filtre) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

if(recherche != null){
    recherche.addEventListener('keydown', find, false);
    recherche.addEventListener('keyup', find, false);
}
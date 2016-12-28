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

if(recherche != null){
    recherche.addEventListener('keydown', find, false);
    recherche.addEventListener('keyup', find, false);
}
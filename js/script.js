const indicator = document.getElementById("indicator");
const toggle = document.getElementById("toggle");
const body = document.body;
const hamburger = document.getElementById("hamburger");
const logo = document.getElementById("navbar-logo");
const a = document.querySelectorAll("#nv");
const navbar = document.getElementById("navbar");
const home = document.getElementById("background-web");
const navbarnav = document.getElementById("navbar-nav");
const pictures = document.querySelector("#pictures");
const cardHome = document.querySelectorAll("#object1");
const song = document.querySelector("#song");
const card = document.querySelector("#home");
const surp = document.querySelector("#surprise");
const teks = document.querySelector("#teks");
const jwb = document.querySelector("#jawab");
const lv = document.querySelector("#lv");
const img = document.querySelectorAll("#ob2");

let idx = 0;
let x = window.matchMedia("(max-width: 768px)");

indicator.onclick = function () {
  idx++;
  if (idx % 2 != 0) {
    toggle.style.transition = "0.8s";
    indicator.style.transition = "0.8s";
    toggle.style.backgroundColor = "rgb(31,41,55)";
    indicator.style.marginLeft = "20px";
    indicator.style.backgroundColor = "rgb(243,244,246)";
    body.style.transition = "0.8s";
    body.style.backgroundColor = "rgb(31,41,55)";
    logo.style.color = "rgb(31,41,55)";
    logo.style.transition = "0.8s";
    hamburger.style.color = "rgb(31,41,55)";
    hamburger.style.transition = "0.8s";
    navbar.style.borderBottomColor = "rgb(31, 41, 55)";
    navbar.style.transition = "0.8s";
    home.style.backgroundImage = "url(img/sunset.jpg)";
    home.style.transition = "0.8s";
    a.forEach((a) => {
      a.style.transition = "0.8s";
      a.style.color = "rgb(31,41,55)";
    });
  } else {
    toggle.style.backgroundColor = "rgb(243,244,246)";
    indicator.style.marginLeft = "0";
    indicator.style.backgroundColor = "rgb(31,41,55)";
    body.style.backgroundColor = "#ffe8d6";
    logo.style.color = "white";
    a.forEach((a) => {
      a.style.color = "white";
    });
    hamburger.style.color = "white";
    navbar.style.borderBottomColor = "#cb997e";
    home.style.backgroundImage = "url(./img/sunrise.jpg)";
  }
};

document.querySelector("#hamburger").onclick = () => {
  navbarnav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// function pClick() {
//   cardHome.forEach((o) => {
//     o.style.display = "none";
//   });
//   pictures.style.display = "inline-block";
//   navbarnav.classList.remove("active");
//   song.style.display = "none";
// }

function hClick() {
  pictures.style.display = "none";
  cardHome.forEach((o) => {
    o.style.display = "flex";
  });
  navbarnav.classList.remove("active");
  song.style.display = "none";
  surp.style.display = "none";
}

function sClick() {
  pictures.style.display = "none";
  cardHome.forEach((o) => {
    o.style.display = "none";
  });
  navbarnav.classList.remove("active");
  song.style.display = "inline-block";
  surp.style.display = "none";
}

function surClick() {
  pictures.style.display = "none";
  cardHome.forEach((o) => {
    o.style.display = "none";
  });
  navbarnav.classList.remove("active");
  song.style.display = "none";
  surp.style.display = "inline-block";
}
function tks() {
  pictures.style.display = "none";
  cardHome.forEach((o) => {
    o.style.display = "none";
  });
  navbarnav.classList.remove("active");
  song.style.display = "none";
  surp.style.display = "inline-block";
  teks.innerHTML =
    "Selamat kamu telah resmi menjadi pacar Danur, I LOVE YOU SAYANG";
  jwb.style.display = "none";
  lv.style.display = "flex";
}

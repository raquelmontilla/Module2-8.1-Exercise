"use strict";

const face = document.querySelector(".js-face");

function changeFace() {
  face.innerHTML = `;)`;
}

function returnFace() {
  face.innerHTML = `:)`;
}

face.addEventListener("mouseover", changeFace);
face.addEventListener("mouseout", returnFace);

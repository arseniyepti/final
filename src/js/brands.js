"use strict";

let brandsButton = document.querySelector('#brands-button');
let brandsWrap = document.querySelector('.brands__images-wrap');
let arrBrands = document.querySelectorAll('.brands__images-item');
let arrBrandsButtons = document.querySelectorAll('.button--brands');
brandsButton.textContent = `Показать все (${arrBrands.length})`;

let setHideClassBrands = function () {
  for (let i = 0; i < arrBrands.length; i++) {

    if (screen.width > 1351 && i > 7) {
      arrBrands[i].classList.toggle('brands__images-item-hidden');
    }
    if (screen.width > 768 && screen.width < 1352 && i > 5) {
      arrBrands[i].classList.toggle('brands__images-item-hidden');
    }
    if (window.getComputedStyle(brandsWrap).overflow == 'scroll') {
      arrBrands[i].classList.remove('brands__images-item-hidden');
    }
  }

}

setHideClassBrands();

brandsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  setHideClassBrands();
  brandsWrap.classList.toggle('brands__images-wrap-hidden');

  if (!brandsWrap.classList.contains('brands__images-wrap-hidden')) {
    brandsButton.textContent = 'Скрыть';
  } else {
    brandsButton.textContent = `Показать все (${arrBrands.length})`;

  }
})

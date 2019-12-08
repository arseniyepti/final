"use strict";
console.log("bot");

let brandsButton = document.querySelector('#brands-button');
let brandsWrap = document.querySelector('.brands__images-wrap');
let arrBrands = document.querySelectorAll('.brands__images-item');
let arrBrandsButtons = document.querySelectorAll('.brands__button');
brandsButton.textContent = `Показать все (${arrBrands.length})`;
let setTabIndex = function () {
  for (let i = 0; i < arrBrands.length; i++) {
    if (brandsWrap.classList.contains('brands__images-wrap-hidden')) {
      if (screen.width > 1119 && i > 7) {
        arrBrandsButtons[i].setAttribute('tabindex', '-1');
      }
      if (screen.width > 768 && screen.width < 1120 && i > 5) {
        arrBrandsButtons[i].setAttribute('tabindex', '-1');
      }
      if (screen.width < 768 && i > 1) {
        arrBrandsButtons[i].setAttribute('tabindex', '-1');
      }
    }
  }
}
setTabIndex();

brandsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  brandsWrap.classList.toggle('brands__images-wrap-hidden');
  if (!brandsWrap.classList.contains('brands__images-wrap-hidden')) {
    brandsButton.textContent = 'Скрыть';
  } else {
    brandsButton.textContent = `Показать все (${arrBrands.length})`;
  }
})

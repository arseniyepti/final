let fixTechnicButton = document.querySelector('#fix-technic-button');
let fixTechnicWrap = document.querySelector('.fix-technic__images-wrap');
let fixTechnicBrands = document.querySelectorAll('.fix-technic__images-item');

fixTechnicButton.textContent = `Показать все (${fixTechnicBrands.length})`;

let setHideClass = function () {
  for (let i = 0; i < fixTechnicBrands.length; i++) {

    if (screen.width > 1119 && i > 3) {
      fixTechnicBrands[i].classList.toggle('fix-technic__images-item-hidden');
    }
    if (screen.width > 768 && screen.width < 1120 && i > 2) {
      fixTechnicBrands[i].classList.toggle('fix-technic__images-item-hidden');
    }
    if (window.getComputedStyle(fixTechnicWrap).overflow == 'scroll') {
      fixTechnicBrands[i].classList.remove('fix-technic__images-item-hidden');
    }
  }

}

setHideClass();

fixTechnicButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  setHideClass();
  fixTechnicWrap.classList.toggle('fix-technic__images-wrap-hidden');

  if (!fixTechnicWrap.classList.contains('fix-technic__images-wrap-hidden')) {
    fixTechnicButton.textContent = 'Скрыть';
  } else {
    fixTechnicButton.textContent = `Показать все (${fixTechnicBrands.length})`;

  }
})

let serviceText = document.querySelector('.service__info-text-wrap');
let ButtonService = document.querySelector('.hide-and-show-button--service');
// let serviceTextHidden = document.querySelector('.service__info-text-wrap--hidden');

ButtonService.addEventListener('click', function () {
  serviceText.classList.toggle('service__info-text-wrap--hidden');
})

let nav = document.querySelector('#nav');
let buttonMenu = document.querySelector('.button--menu');
let main = document.querySelector('.main-wrapper');
let buttonClose = document.querySelectorAll('.button--close');
let feedback = document.querySelector('#feedback');
let callback = document.querySelector('#callback');
let wrapper = document.querySelector('.wrapper');

buttonMenu.addEventListener('click', function () {
  nav.classList.add('nav--show');
  main.classList.add('wrapper-blur');
})

main.addEventListener('click', function () {
  if (window.getComputedStyle(nav).width == '320px') {
    main.classList.remove('wrapper-blur');
    nav.classList.remove('nav--show');
  }
})

let modalClose = function (close) {
  close.addEventListener('click', function () {
    main.classList.remove('wrapper-blur');
    nav.classList.remove('nav--show');
    wrapper.classList.remove('wrapper-blur');
    feedback.classList.remove('feedback--show');
    callback.classList.remove('feedback--show');
  })
}

for (let i = 0; i < buttonClose.length; i++) {
  modalClose(buttonClose[i]);
}

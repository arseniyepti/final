let feedback = document.querySelector('#feedback');
let showFeedbackButtons = document.querySelectorAll('.button--requisition');
let callback = document.querySelector('#callback');
let showCallbackButtons = document.querySelectorAll('.button--phone');
let wrapper = document.querySelector('.wrapper');


let modalFeedbackShow = function (button) {
  button.addEventListener('click', function () {
    feedback.classList.add('feedback--show');
    callback.classList.remove('feedback--show');
    wrapper.classList.add('wrapper-blur');
  })
}


wrapper.addEventListener('click', function () {
  if (window.getComputedStyle(feedback).width == '440px' || window.getComputedStyle(callback).width == '440px') {
    wrapper.classList.remove('wrapper-blur');
    feedback.classList.remove('feedback--show');
    callback.classList.remove('feedback--show');
  }
})

let modalCallbackShow = function (button) {
  button.addEventListener('click', function () {
    callback.classList.add('feedback--show');
    feedback.classList.remove('feedback--show');
    wrapper.classList.add('wrapper-blur');
  })
}



for (let i = 0; i < showFeedbackButtons.length; i++) {
  modalFeedbackShow(showFeedbackButtons[i]);
}

for (let i = 0; i < showCallbackButtons.length; i++) {
  modalCallbackShow(showCallbackButtons[i]);
}

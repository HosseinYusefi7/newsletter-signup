const popup = document.querySelector('.popup');
const input = document.querySelector('#email-input');
const subBtn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');
const dismissBtn = document.querySelector('.dismiss-btn');
const validErr = document.querySelector('.valid-error');
const subInfo = document.querySelector('.subscribe-info');

const hideErr = () => {
  validErr.style.display = 'none';
};

const validateEmail = () => {
  const reg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!input.value.match(reg)) {
    validErr.style.display = 'block';
  } else {
    hideErr();
    wrapper.classList.add('popup-anim');
    popup.classList.add('popup-anim');
    subInfo.innerHTML = ` A confirmation email has been sent to ${input.value} Please
    open it and click the button inside to confirm your subscription`;
    input.value = '';
  }
};
const acceptedSub = () => {
  wrapper.classList.add('popup-anim-back');
  popup.classList.add('popup-anim-back');
};
subBtn.addEventListener('click', validateEmail);
dismissBtn.addEventListener('click', acceptedSub);

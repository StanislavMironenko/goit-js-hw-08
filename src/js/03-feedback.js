import throttle from 'lodash.throttle';
const refs = {
  feetbackForm: document.querySelector('.feedback-form'),
  textArea: document.querySelector('textarea'),
  emailArea: document.querySelector('input'),
};
refs.feetbackForm.addEventListener('input', throttle(inputTextArea, 500));
refs.feetbackForm.addEventListener('submit', onSubmitButtonClick);

const SAVE_USER_DATA_KEY = 'feedback-form-state';
const userData = {};
populateText();

function inputTextArea(e) {
  userData[e.target.name] = e.target.value;
  localStorage.setItem(SAVE_USER_DATA_KEY, JSON.stringify(userData));
}

function onSubmitButtonClick(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(SAVE_USER_DATA_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(SAVE_USER_DATA_KEY);
}

function populateText() {
  const saveData = JSON.parse(localStorage.getItem(SAVE_USER_DATA_KEY));
  if (saveData) {
    refs.textArea.value = saveData['message'];
    refs.emailArea.value = saveData['email'];
  }
}

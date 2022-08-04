import throttle from 'lodash.throttle';

const SAVE_USER_DATA_KEY = 'feedback-form-state';
let userData = JSON.parse(localStorage.getItem(SAVE_USER_DATA_KEY))||{};

const refs = {
  feetbackForm: document.querySelector('.feedback-form'),
  textArea: document.querySelector('textarea'),
  emailArea: document.querySelector('input'),
};
refs.feetbackForm.addEventListener('input', throttle(inputTextArea, 500));
refs.feetbackForm.addEventListener('submit', onSubmitButtonClick);

populateText();

function inputTextArea(e) {
  userData[e.target.name] = e.target.value;
  localStorage.setItem(SAVE_USER_DATA_KEY, JSON.stringify(userData));
  
}
console.log(userData)
function onSubmitButtonClick(e) {
  if (refs.textArea.value === '' || refs.textArea.value === '') {
  return alert('Please fill in all the fields!');
  }
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(SAVE_USER_DATA_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(SAVE_USER_DATA_KEY);
  userData = {};
}

function populateText() {
  const saveData = JSON.parse(localStorage.getItem(SAVE_USER_DATA_KEY));
  if (saveData) {
    if (saveData['message']) {
      refs.textArea.value = saveData['message'];
    }
    if (saveData['email']) {
      refs.emailArea.value = saveData['email']
    };
  }
}

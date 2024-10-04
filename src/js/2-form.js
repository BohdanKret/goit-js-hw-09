const feedbackForm = document.querySelector('.feedback-form');
const emailForm = feedbackForm.elements.email;
const messageForm = feedbackForm.elements.message;
const localStorageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(localStorageKey);
if (savedData === null) {
  emailForm.value = '';
  messageForm.value = '';
} else {
  const parseData = JSON.parse(savedData);
  emailForm.value = parseData.email;
  messageForm.value = parseData.message;
}

feedbackForm.addEventListener('input', onFormInput);
feedbackForm.addEventListener('submit', onBtnSubmit);

function onFormInput() {
  formData.email = emailForm.value.trim();
  formData.message = messageForm.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function onBtnSubmit(event) {
  event.preventDefault();

  if (emailForm.value === '' || messageForm.value === '') {
    return alert('Fill please all fields');
  }

  formData.email = emailForm.value.trim();
  formData.message = messageForm.value.trim();

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  feedbackForm.reset();
}

// function handelBtnSubmit(event) {
//   event.preventDefault();

//   const feedbackFormEmail = event.target.elements.email.value.trim();
//   const feedbackFormPassword = event.target.elements.password.value.trim();

//   if (feedbackFormEmail === '' || feedbackFormPassword === '') {
//     return alert('All form fields must be filled in');
//   }

//   const loginFormData = {
//     email: feedbackFormEmail,
//     password: feedbackFormPassword,
//   };

//   console.log(loginFormData);

//   loginForm.reset();
// }

var callButton = document.querySelector(".call-button");
var formCallback = document.querySelector(".form-callback");
var form = formCallback.querySelector("form");
var closer = formCallback.querySelector(".callback-close");
var nameForm = formCallback.querySelector("[name='name']");
var email = formCallback.querySelector("[name='email']");
var message = formCallback.querySelector("[name='message']");

var isStorageSupport = true;
var storageNameForm = "";
  
try {
  storageNameForm = localStorage.getItem("nameForm");
  } catch (err) {
    isStorageSupport = false;
  }

callButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  formCallback.classList.add("modal-show");
  if (storageNameForm) {
      nameForm.value = localStorage.getItem("nameForm");
	  email.value = localStorage.getItem("email");
	  message.focus();
    }
  else {
	nameForm.focus();
    }
});

closer.addEventListener("click", function (evt) {
    evt.preventDefault();
    formCallback.classList.remove("modal-show");
	formCallback.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!nameForm.value || !email.value || !message.value) {
    evt.preventDefault();
	formCallback.classList.remove("modal-error");
    formCallback.offsetWidth = formCallback.offsetWidth;
	formCallback.classList.add("modal-error");
    alert("Нужно заполнить все поля");
  }
  else {
    if (isStorageSupport) {  
      localStorage.setItem("nameForm", nameForm.value);
	  localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (formCallback.classList.contains("modal-show")) {
      formCallback.classList.remove("modal-show");
	  formCallback.classList.remove("modal-error");
    }
  }
});
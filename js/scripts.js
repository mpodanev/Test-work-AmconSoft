"use strict";

// Slider script
var buttonSliderPrev = document.querySelector(".slider__prev-button");
var buttonSliderNext = document.querySelector(".slider__next-button");
var slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides((slideIndex += 1));
}
function prevSlide() {
  showSlides((slideIndex -= 1));
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".slider__item");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

buttonSliderNext.addEventListener("click", nextSlide);
buttonSliderPrev.addEventListener("click", prevSlide);

setInterval(nextSlide, 4000);

// Form script
var feedbackButton = document.querySelector(".header__feedback-link");
var popupForm = document.querySelector(".popup-form");
var form = document.querySelector(".form");
var closeFormButton = document.querySelector(".from__close-btn");
var nameInput = document.querySelector("[name=name]");
var phoneInput = document.querySelector("[name=phone]");
var emailInput = document.querySelector("[name=email]");
var messageInput = document.querySelector("[name=message]");
var submitButton = document.querySelector(".form button[type=submit]");
var storageName = localStorage.getItem("name");
var storagePhone = localStorage.getItem("phone");
var storageEmail = localStorage.getItem("email");
var storageMessage = localStorage.getItem("message");
var isStorageSupport = true;

try {
  storageName = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackButton.addEventListener("click", function(event) {
  event.preventDefault();
  popupForm.style.display = "flex";
  nameInput.focus();
  if (storageName) {
    nameInput.value = storageName;
    phoneInput.focus();
  }
  if (storagePhone) {
    phoneInput.value = storagePhone;
    phoneInput.focus();
  }
  if (storageEmail) {
    emailInput.value = storageEmail;
    messageInput.focus();
  }
  if (storageMessage) {
    messageInput.value = storageMessage;
    submitButton.focus();
  }
});
closeFormButton.addEventListener("click", function() {
  popupForm.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == popupForm) {
    popupForm.style.display = "none";
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupForm.style.display == "flex") {
      evt.preventDefault();
      popupForm.style.display = "none";
    }
  }
});

form.addEventListener("submit", function(event) {
  if (!nameInput.value) {
    event.preventDefault();
    nameInput.placeholder = "Поле обязательно для заполнения";
    nameInput.classList.add("form__input-warning");
  }
  if (!phoneInput.value) {
    event.preventDefault();
    phoneInput.placeholder = "Поле обязательно для заполнения";
    phoneInput.classList.add("form__input-warning");
  }
  if (!emailInput.value) {
    event.preventDefault();
    emailInput.placeholder = "Поле обязательно для заполнения";
    emailInput.classList.add("form__input-warning");
  }
  if (!messageInput.value) {
    event.preventDefault();
    messageInput.placeholder = "Поле обязательно для заполнения";
    messageInput.classList.add("form__input-warning");
  }
});

nameInput.addEventListener("input", function() {
  nameInput.classList.remove("form__input-warning");
  nameInput.placeholder = "";
  if (isStorageSupport) {
    localStorage.setItem("name", nameInput.value);
  }
});
phoneInput.addEventListener("input", function() {
  phoneInput.classList.remove("form__input-warning");
  phoneInput.placeholder = "";
  if (isStorageSupport) {
    localStorage.setItem("phone", phoneInput.value);
  }
});
emailInput.addEventListener("input", function() {
  emailInput.classList.remove("form__input-warning");
  emailInput.placeholder = "";
  if (isStorageSupport) {
    localStorage.setItem("email", emailInput.value);
  }
});
messageInput.addEventListener("input", function() {
  messageInput.classList.remove("form__input-warning");
  messageInput.placeholder = "";
  if (isStorageSupport) {
    localStorage.setItem("message", messageInput.value);
  }
});

var link = document.querySelector(".button-feedback");

var overlay = document.querySelector(".modal-overlay");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var nameFeedback = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var description = popup.querySelector("[name=description]");

var isStorageSupport = true;
var StorageName = "";
var StorageEmail = "";


try {
  StorageName = localStorage.getItem("name");
  StorageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-out");
  overlay.style.display = "block";
  popup.classList.add("modal-show");

  nameFeedback.focus();

  if (StorageName) {
    nameFeedback.value = StorageName;
    email.focus();
  }
  if (StorageEmail) {
    email.value = StorageEmail;
    description.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-out");

  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.style.display = "";

});

form.addEventListener("submit", function (evt) {
  if (!nameFeedback.value || !email.value || !description.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameFeedback.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.add("modal-out");

      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.style.display = "";

    }
  }
});



var link = document.querySelector('.button-feedback');

var overlay = document.querySelector('.modal-overlay');
var popup = document.querySelector('.modal-feedback');
var close = popup.querySelector('.modal-close');

var form = popup.querySelector('form');
var name = popup.querySelector('[name="name"]');
var email = popup.querySelector('[name="email"]');
var description = popup.querySelector('[name="description"]');

var isStorageSupport = true;
var StorageName = '';
var StorageEmail = '';


try {
  StorageName = localStorage.getItem('name');
  StorageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-out');
  overlay.style.display = 'block';
  popup.classList.add('modal-show');

  name.focus();

  if (StorageName) {
    name.value = StorageName;
    email.focus();
  }
  if (StorageEmail) {
    email.value = StorageEmail;
    description.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-out');

  popup.classList.remove('modal-show');
  popup.classList.remove("modal-error");
  overlay.style.display = '';

});

form.addEventListener('submit', function (evt) {
  if (!name.value || !email.value || !description.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
    console.log("Нужно ввести имя, email и описание!");
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
      localStorage.setItem('email', email.value);
    }
  }
});

/* formFeedback.addEventListener('submit', function(evt) {
    if (!nameFeedback.value || !emailFeedback.value || !descriptionFeedback.value) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-error");
      modalFeedback.offsetWidth = modalFeedback.offsetWidth;
      modalFeedback.classList.add('modal-error');
      console.error("Нужно ввести имя, email и описание!");
    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', nameFeedback.value);
        localStorage.setItem('email', emailFeedback.value);
      }
    }
  }); */

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      evt.preventDefault();
      popup.classList.add('modal-out');

      popup.classList.remove('modal-show');
      popup.classList.remove("modal-error");
      overlay.style.display = '';

    }
  }
});



const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

function linkClick(event) {
  event.preventDefault();
}

function checkboxClick(event) {
  event.preventDefault();
}

function inputKeyPress(event) {
  if (event.key !== 'a') {
    event.preventDefault();
  }
}

hrefLink.addEventListener('click', linkClick);
inputCheckbox.addEventListener('click', checkboxClick);
inputText.addEventListener('keypress', inputKeyPress)

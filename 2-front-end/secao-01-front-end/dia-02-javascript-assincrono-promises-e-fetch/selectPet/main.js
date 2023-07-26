const btnRandomDog = document.getElementById('btn-random-dog');
const btnRandomCat = document.getElementById('btn-random-cat');
const btnSurpriseMe = document.getElementById('btn=surprise');
const img = document.getElementById('image');

const API_DOG_LINK = 'https://dog.ceo/api/breeds/image/random';
const API_CAT_LINK = 'https://api.thecatapi.com/v1/images/search';

const API_DOG = () => fetch(API_DOG_LINK)
  .then((response) => response.json())
  .then((data) => {
    const url = data.message;
    return url;
  });

const API_CAT = () => fetch(API_CAT_LINK)
  .then((response) => response.json())
  .then((data) => {
    const { url } = data[0];
    return url;
  });

function randomDog() {
  API_DOG().then((response) => {
    img.src = response;
  });
}

function randomCat() {
  API_CAT().then((response) => {
    img.src = response;
  });
}

function surpriseMe() {
  Promise.race([
    API_DOG(),
    API_CAT(),
  ]).then((response) => {
    img.src = response;
  });
}

btnRandomDog.addEventListener('click', randomDog);
btnRandomCat.addEventListener('click', randomCat);
btnSurpriseMe.addEventListener('click', surpriseMe);

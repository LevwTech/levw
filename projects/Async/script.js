'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function render(data) {
const html = ` 
<article class="country">
 <img class="country__img" src="${data.flag}" />
 <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${data.population} people</p>
  <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
  <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
 </div>
</article>`;

countriesContainer.insertAdjacentHTML('beforeend',html);
countriesContainer.style.opacity=1
}

function getCountryData(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => render(data[0]))
}
getCountryData('egypt');








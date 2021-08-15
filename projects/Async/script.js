'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}m people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };

function getCountryData(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {
      if(!response) throw new Error('Country not Found')
      return response.json()
    } )
    .then(data => {
     renderCountry(data[0])
     const neighboor = data[0].borders[0];  // second data depend on first (chain)
     return fetch(`https://restcountries.eu/rest/v2/name/${neighboor}`)
    }
    ).then(response => response.json()).then(data => renderCountry(data[0], `neighbour`))
    .catch(err=> alert(`${err.message} 
    ERRORS HAPPEN...SORRY 😥`))
    // .finally(console.log(`then will be called if fullfilled, catch will be called if rejected, 
    // finally will ALWAYS be called`))

}
getCountryData('egypt');

// if (error) throw new Error(`msg`)  // will be caught by .catch




// fetch('https://animechan.vercel.app/api/random')
//         .then(response => {
          
//           return response.json()}
//           )
//         .then(quote => {
//           const char = quote.character
//           console.log(quote)
//           console.log(char)
//           return fetch(`https://animechan.vercel.app/api/quotes/character?name=${char}`)
//           }).then(response => response.json())
//         .then(quote2 => console.log(`Another quote by ${quote2[0].character} :
//         ${quote2[0].quote}`))

      
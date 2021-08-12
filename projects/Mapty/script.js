'use strict';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

navigator.geolocation?.getCurrentPosition(function(position){
const latitude = position.coords.latitude
const longitude = position.coords.longitude
const coords = [latitude,longitude]
const googleMap = `https://www.google.com/maps/@${latitude},${longitude}`

 map = L.map('map').setView(coords, 13);  // 'map'is a class an empty div in the html

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(coords).addTo(map)
    .bindPopup('You Are Here Now 😀')
    .openPopup();

    map.on('click', function(mapE){
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus()  
    })


}, function(){
alert("couldn't get position 😢 dont decline pls!")
});

form.addEventListener('submit', function(e){

    inputDistance.value = inputCadence.value = inputElevation.value = inputDuration.value = ''
    e.preventDefault();
    const lat = mapEvent.latlng.lat
    const lng = mapEvent.latlng.lng
    L.marker([lat,lng]).addTo(map)
    .bindPopup(
        L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `running-popup`,
    })
    )
    .setPopupContent(`Workout`)
    .openPopup();
});

inputType.addEventListener('change', function(){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
})
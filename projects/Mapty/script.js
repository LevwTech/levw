'use strict';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');

const inputElevation = document.querySelector('.form__input--elevation');


class Workout {
    date = new Date();
    id = (Date.now() +'').slice(10);

    constructor(coords,distance,duration) {
        this.coords = coords;
        this.distance = distance;  // in km
        this.duration = duration; // in min
    }

}
class Running extends Workout{
    
    constructor(coords,distance,duration,cadence) {
        super(coords,distance,duration);
        this.cadence = cadence
        this.calcPace();
    }

    calcPace () {
        this.pace = this.duration/this.distance;
        return this.pace;

    }

}

class Cycling extends Workout{

    constructor(coords,distance,duration,elevationGain) {
        super(coords,distance,duration);
        this.elevationGain = this.elevationGain
        this.calcSpeed();
    }
    calcSpeed() {
        this.speed = this.distance/(this.duration/60);
        return this.speed
    }
    
}
class App {
    
    #map;
    #mapEvent;
    #workouts = [];
    constructor(){
        this._getPosition();

        form.addEventListener('submit',this._newWorkout.bind(this));
        
        inputType.addEventListener('change',this._toggleElevationField)
    }

    _getPosition(){
        navigator.geolocation?.getCurrentPosition(this._loadMap.bind(this)
           , function(){
            alert("couldn't get position 😢 dont decline pls!")
            });
    }

    _loadMap(position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const coords = [latitude,longitude]
        const googleMap = `https://www.google.com/maps/@${latitude},${longitude}`
        
         this.#map = L.map('map').setView(coords, 13);  // 'map'is a class an empty div in the html
        
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        
        L.marker(coords).addTo(this.#map)
            .bindPopup('You Are Here Now 😀')
            .openPopup();
        
            this.#map.on('click',this._showForm.bind(this))
        
        
        }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus()  
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
    }

    _newWorkout(e) {
        const validInputs = (...inputs) => inputs.every(item=> Number.isFinite(item));
        const isPositive =  (...inputs) => inputs.every(item=> item>0);
        
        const type = inputType.value;
        const distance = Number(inputDistance.value)
        const duration = Number(inputDuration.value)
        const lat = this.#mapEvent.latlng.lat
        const lng = this.#mapEvent.latlng.lng
        let workout;

        if (type === 'running') {
            const cadence =  Number(inputCadence.value)
            if(!validInputs(distance,duration,cadence) || !isPositive(distance,duration,cadence))
             return alert("Should be a positive number 🙂"); 
            
             workout = new Running([lat,lng],distance,duration,cadence)  
        }
        if (type === 'cycling') {
            const elevation =  Number(inputElevation.value)
            if(!validInputs(distance,duration,elevation) || !isPositive(distance,duration)) 
             return alert("Should be a positive number 🙂");   
             workout = new Running([lat,lng],distance,duration,elevation) 
        }
        this.#workouts.push(workout);

        inputDistance.value = inputCadence.value = inputElevation.value = inputDuration.value = ''
        e.preventDefault();
        L.marker([lat,lng]).addTo(this.#map)
        .bindPopup(
            L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${type}-popup`,
        })
        )
        .setPopupContent(`Workout`)
        .openPopup();
    }


    }

    const app = new App();


// guard clause   if(opposite) return;
// function takes any number of arguments and doubles them!  
// ...numbers >> REST PATTERN  (take any number of arguments) (uses them as an array) used in func
// const doubleNumbers = (...numbers) => numbers.map(number=>number*2);
// console.log(doubleNumbers(1,2,3)) // [2,4,6]
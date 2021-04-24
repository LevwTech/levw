`use strict`;
const homies = ['marxy', 'yuichero', 'slayer'];



const levw = {
    //properties
    firstName: "Abdelrahman",
    age: 19,

    //methods
    doubleAge: function () { return this.age * 2; },
    friends: homies
}

// accessing elements
console.log(levw.age);
console.log(levw[`friends`]);
const commonWord = 'Name';
console.log(levw[`first${commonWord}`])
console.log(levw[`first` + commonWord])

// adding elements (remember that order doesnt matter )
levw.hobby = 'football'
levw['website'] = `levw.me`
console.log(levw.doubleAge())


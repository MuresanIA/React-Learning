// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';


let a = 'test';
const b = true;
let c = 789;

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const obj ={firstName, lastName, age, eyeColor};


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";


const templateString = `Hello  ${firstName} have I met you before? I think we met in ${city} last summer, no???`


// default arguments
// default age to 10;
function isValidAge(age=10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"

const sym1 = Symbol();

const sym2 = Symbol('symbol 2')

const sym3 = Symbol('symbol 3')


// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}


const arrow = (username, location) => {
    if (username && location) {
        'I am not lost'
    } else {
        'I am totally lost'
    }
}

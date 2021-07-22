"use strict"

// old way
console.log(Math.pow(2, 8)) // === 256
// new syntax
console.log(2 ** 8) // === 256


let DocRob = "Ry";
console.log(DocRob);

if (true) {
    DocRob = "mark";
}

`` //template strings
console.log(`${DocRob} says hi`); // can inject a variable into the curly braces

let randomNumberHTML = `<p>Your random number is ${Math.random() * 100}</p>`
document.querySelector("body").innerHTML += randomNumberHTML //prints out a random number everytime you refresh on the page

//for.. of loop
const people = [`Oswaldo`, `Christian`, `Herman`];

for (let element of people) { //element represents one of the people in the array above
    console.log(element);
}

people.forEach(function (person, index) {
    console.log(`${person}'s index is --> ${index}`) //will grab the index of each person
})

console.log(sayHello("Cierra"))

function sayHello(name) {
    return `Hello from ${name}!`;
}

// const sayHello = name => {  //arrow function
//     const nameToDisplay = name.toUpperCase();
//     return `Hello from ${nameToDisplay}!`
// }

const sayHelloFromComputer = _ => {  //don't have to pass an argument, can use _ or ()
    return `Hello, user.`;
}
console.log(sayHelloFromComputer());

function sayHi(name = "Rei Hino"){
    return `Hi from ${name}!`;
}


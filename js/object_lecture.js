//This is one way to create an object in JavaScript
// var var = new Object()

// Here is another way to create an object
var car = {};


car = {
    year: 2012,
    make: "Honda",
    model: "Civic"
}

console.log(car);

// to call on a specific object ex:
car.model // returns Civic
// can also use
car["year"] // returns 2012

// to add to it
car.numberOfCylinders = 4
// can also use
car["numberOfSeats"] = 5

var person = {
    name: "Bob",
    heightInInches: 68,
    age: 45,
}

// can assign the owner to the car ex:
car.owner = person;

// add child to the owner
var child = {
    name: "Matilda",
    age: 2
}

car.owner.daughter = child

// create a function
car.info = function() {
    return car.year + "," + car.make + "" + car.model;
}

// to call it
car.info()

carTwo = {
    make: "Ford",
    model: "Fusion",
    numberOfCylinders: 4,
    numberOfDoors: 4,
    numberOfSeats: 4,
    year: 2016,
    owner: {
        name: "Sally",
        age: 45,
        son: {
            name: "Rango",
            age: 16
        }
    }
}

car.info = function (name) {
    if (name !== undefined) {
        return "Hi, my name is " + name + " and I own a" + car.year + "," + car.make + " " + car.model
    } // use this to call that specific information (calling carTwo's information)
    return this.year + ", " + this.make + " " + this.model
}
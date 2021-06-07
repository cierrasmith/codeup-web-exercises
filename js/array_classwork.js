'use strict';

alert("Here is array classwork.");

let test = [];

/*
array is a memory that stores more than one thing
*/

    test = [100, 100, 90, 95, 90, 100];

    var sailorScouts = [];
    sailorScouts = ["Sailor Mars", "Sailor Mercury", "Sailor Jupiter", "Sailor Moon", "Sailor Venus"];

    var stuff = [1, 2, 3, "a", "b", "c", undefined, null, sailorScouts];

    console.log("Dump the whole array.");
    console.log(stuff);

    console.log("Show the 4th element.");
    console.log(stuff[3]);

    console.log("Length of the array.");
    console.log(stuff.length);

    for (let number = 0; number < stuff.length; number++) {
        console.log(stuff[number]);
    }

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
});

//this code produces the same results as the code above
for (let number = 0; number < shapes.length; number++) {
    console.log("Here is a lovely shape: " + shapes[number] + ".");
}

//  .push() adds to the end of the array
//  .unshift() adds to the beginning of the array
//  .pop() removes the last element of the array
//  .shift() removes an element from the array
//  .indexOf('string') targets a specific element
//  .lastIndexOf('string') gives the last element
//  .reverse() flips the array around
//  .sort() sorts the array in alphabetical order
//  .join() joins all individual elements to a single string
//  .splice() remove and/or replace elements

"use strict";

//console.log("Hello World!");
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInput = prompt("What is your favorite color?");
alert(userInput + " is my favorite color too.")

alert("The price for the movies is " + (3+5+1)* 3);

alert("The payment received is " + ((400*6)+(350*10)+(380*4)));

var full = confirm("Is the class full?");
var conflict = confirm("Is there a conflict?");
alert("You can enroll in class:" + (!full && !conflict));
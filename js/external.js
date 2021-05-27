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

var products = confirm("Are you buying more than 2 items?");
var premium = confirm("Are you a premium member?")
var expired = confirm("Is the offer expired?");
alert("Offer applied:" + (products && !expired) || premium);

var username = 'codeup';
var password = 'notastrongpassword';

var password_is_five_characters = password.length >= 5;
var username_not_included = !password.includes(username);
var username_less_than_20_chars = username.length < 20;
var contains_no_whitespace = password === password.trim();

console.log(password_is_five_characters);
console.log(username_not_included);
console.log(username_less_than_20_chars);
console.log(contains_no_whitespace);

let DocRob = "Ry";
console.log(DocRob);

if (true) {
    DocRob = "mark";
}

`` //template strings
console.log(`${DocRob} says hi`); // can inject a variable into the curly braces

let randomNumberHTML = `<p>Your random number is ${Math.random() * 100}</p>`
document.querySelector("body").innerHTML += randomNumberHTML //prints out a random number everytime you refresh on the page
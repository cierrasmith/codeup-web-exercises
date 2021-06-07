//alert("My break and continue is working.")

/*for (let i = 1; i < 50; i++) {
    if (i % 2 !== 0) {
        continue;
    }
        console.log('Here is an odd number: ' + i);
    }



var oddNumber;

while (true) {
    oddNumber = parseInt(prompt("Please enter an off number between 1 and 50"));
    if (oddNumber % 2 !== 0) {
        break;
    }
}

for (let i = 1; i < 50; i++) {
    if (i == oddNumber) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    if (i % 2 != 0) {
        console.log("Here is an odd number:" + i);
    }
}
*/

let odd_Number;

while (true) {
    odd_Number = prompt("Enter an odd number between 1 and 50.");
    if ((odd_Number != 1) && (odd_Number <= 50)) {
        if (odd_Number % 2 == 1) {
            break;
         }
    }
}

console.log("Number to skip is: " + odd_Number);

for (let number = 1; number < 50; number = number + 2) {
    if (odd_Number == number) {
        console.log("Yikes! Skipping number: " + odd_Number);
        continue;
    }
    console.log("Here is an odd number: " + number);
}


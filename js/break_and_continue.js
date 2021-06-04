//alert("My break and continue is working.")

/*for (let i = 1; i < 50; i++) {
    if (i % 2 !== 0) {
        continue;
    }
        console.log('Here is an odd number: ' + i);
    }

*/

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


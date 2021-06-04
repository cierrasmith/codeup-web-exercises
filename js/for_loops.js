//alert("My exercise page is working.")

/*function showMultiplicationTable(x) {
    for (let y = 0; y <= 10; y++)
    console.log(x + " x " + y + " = " + (x * y));
}
showMultiplicationTable(7);*/

//function randomNumber()

for (y = 0; y <= 10; y++) {
    let x = Math.ceil(Math.random() * 180) + 20;
    if (x % 2 === 0) {
        console.log(x + " is even.");
    } else {
        console.log(x + " is odd.");
    }
}

//alert("This page is working");

/*
let index = 2;

while (index < 65537) {
    //do something
    console.log(index);
    index = index * 2;
}
 */

//Ice cream cone do while exercise

var totalAvailableCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesBought= Math.floor(Math.random() * 5) + 1;
    var conesLeft = totalAvailableCones - conesBought;

    if(conesBought < totalAvailableCones) {
        console.log(conesBought + " cones sold.")
    }
    if((conesLeft + conesBought) > totalAvailableCones ) {
        console.log("I cannot sell you " + conesBought + " because I only have " + conesLeft);

    }

} while (totalAvailableCones > 100) ;
console.log("Yay, I've sold them all!");



/*var name = "MARK"

var hasTheNameMark = ( name.toLowerCase() === "Mark".toLowerCase() );

if (hasTheNameMark) {
    // if condition of if statement is true, it's code body will run
    alert("Hey I know somebody named Mark!!");
} else {
    alert("Hey you're not Mark!")
}

var aNumber = 78;

if (aNumber % 2 === 0) {
    // even - if a number is divisible by 2 and equal to 0

    if (aNumber % 3 === 0) {
        // aNumber is even and also divisible by 3

    }
}

if (aNumber % 2 === 0 && number % 3 === 0) {

    //aNumber is even and divisible by 2 and divisible by 3

}
*/

function multiplyTwoNumbers(myParameter1, myParameter2) {
    return myParameter1 * myParameter2;
}
console.log("call to multiply 2 numbers is : " + multiplyTwoNumbers(4, 5));
console.log("call to multiply 2 numbers is : " + multiplyTwoNumbers(6, 7));

function firstAndLastName(firstName, lastName) {
    if(firstName.length < 1) {
        console.log("ERROR: first name cannot be blank");
        return "";
    }
    return firstName + " " + lastName;
}

// return shortened version of full name given first and last name
// i.e., at most 10 characters of full name
// if name is longer than 10 chars, return first 7 chars and ...
function shortenFullName(firstName, lastName) {
    var shortName = firstAndLastName(firstName, lastName);

    // if shortName has more than 10 chars, then shorten it with ...
    if(shortName.length > 10) {
        var shorterName = shortName.substr(0, 7);
        return shorterName + "...";
    }
    return shortName;
}

console.log(shortenFullName("squilliam", "fancyson"));


//8 Jul evening practice

var stuff = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

function printWordIfStartsWithT(word) {
    if(word.charAt(0) === 't') {
        console.log("element at index " + i + " is " + word);
    }
}
for (let i = 0; i < stuff.length; i++) {

    var currentWord = stuff[i];
    printWordIfStartsWithT(currentWord);

}
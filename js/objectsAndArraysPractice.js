//1. Create a function called `removeDuplicates` that accepts an array of strings and returns the array with all duplicate elements filtered out.

function removeDuplicates(arrayOfStrings) {
    return ([... new Set(arrayOfStrings)]);
}
console.log(removeDuplicates(["sam", "dean", "castiel", "dean", "sam", "crowley"]));

console.log(removeDuplicates(["sailorMars", "sailorMoon", "sailorJupiter", "sailorMars", "sailorSaturn", "sailorMoon"]));

//the way using a loop
// function removeDuplicates(arrayOfStrings) {
//
//     var uniqueStrings = [];
//
//     for (let i = 0; i <arrayOfStrings.length; i++) {
//
//         if (uniqueStrings.includes(arrayOfStrings[i])) {
//
//         } else {
//             uniqueStrings.push(arrayOfStrings[i])
//         }
//     }
//     return uniqueStrings;
// }


//2. Create a function called max that accepts an array of numbers and returns the largest number from that array.

function max(arrayOfNumbers) {
    return Math.max(...arrayOfNumbers);
}

console.log(max([4, 34, 193, 2, 345, 46, 0]));
// Should return the following
//345

console.log(max([-34, 83, 21, 38, -2039, 3.2]));
// Should return the following
//83

console.log(max([54.5, 2, 34, -93]));
// Should return the following
//54.5


//3.  Create a function called mostOccuringNumber that accepts an array of numbers and returns the number that occurs the most within that array.

function mostOccuringNumber(numbers) {
    // 1. counts the # of times each number occurs
    var counts = [];
    for (let i = 0; i < numbers.length; i++) {
        var aNumber = numbers[i];
        if(counts[aNumber] === undefined) {
            counts[aNumber] = 1
        } else {
            counts[aNumber]++; //gives us access to the counts element at index "aNumber"
        }

    }
    console.log(counts);
}

console.log(mostOccuringNumber([8, 93, 28, 8, 27, -62, 32, 8, -62]));
// Should return the following
//8

console.log(mostOccuringNumber([8, 93, -62.0, 28, 27, -62, 32, 8, -62]));
// Should return the following
//-62

console.log(mostOccuringNumber([73.5, 8, 0, -3, 3.50, 8.25, 3.50]));
// Should return the following
//3.5

//4. Create a function called whoIsPassing that accepts an array of objects, where each object is a student's name and class average (from 0 to 100). Your function will return an array of objects where each object is a student's name and whether he/she is passing. Note that a class average of 60 and higher is passing.

function whoIsPassing(arrayOfStudents) {

    var passingResults = [];

    for (let i=0; i < arrayOfStudents.length; i++) {

        if (arrayOfStudents[i].classAverage >= 60) {
            // this means that they are passing

            passingResults.push(
                {
                    name: arrayOfStudents[i].name,
                    passing: true
                }
            )
        } else {
            //student is failing

            passingResults.push(
                {
                    name: arrayOfStudents[i].name,
                    passing: false
                }
            )
        }
    }
    return passingResults;
}

var students = [
    {
        name: "Phill Rundy",
        classAverage: 53
    },
    {
        name: "Samuel Moore",
        classAverage: 71
    },
    {
        name: "Mark Tendly",
        classAverage: 84
    },
    {
        name: "Dough Mosh",
        classAverage: 87
    },
    {
        name: "Bran Thomb",
        classAverage: 93
    },
    {
        name: "Mario Yushi",
        classAverage: 82
    },
    {
        name: "Nathan Skywalker",
        classAverage: 52
    }
]

console.log(whoIsPassing(students));

// 5. Create a function called dateStringToObject that accepts a date in the following string format "YYYY-MM-DD" and returns an object that contains month, day, and year properties.

function dateStringToObject(dateString) {

    var splitString = dateString.split("-");
    return {month: splitString[1], day: splitString[2], year: splitString[0]}
}

console.log(dateStringToObject("2016-2-13"));
// Should return the following
//{month: 2, day: 13, year: 2016}

console.log(dateStringToObject("2005-11-29"));
// Should return the following
//{month: 11, day: 29, year: 2005}

console.log(dateStringToObject("1994-12-21"));
// Should return the following
//{month: 12, day: 21, year: 1994}

// 6. Create a function called reverseString that that accepts a string and returns a string with the characters in reverse order.

function reverseString(string) {

    var revString = ""

    for (let i = string.length -1; i >= 0 ; i--) {

        revString += string.charAt(i);
    }

    return revString;
}

console.log(reverseString("squid"));
// Should return the following
//"diuqs"

console.log(reverseString("tilda"));
// Should return the following
//"adlit"

console.log(reverseString("2016-02-13"));
// Should return the following
//"31-21-6102"

// 7. Create a function called numberInfo that accepts a number and returns an object with the properties isPositive, isEven, isZero. The properties should either be true or false based on if the parameter meets the criteria.

function numberInfo(number) {

    var isNumberPositive = (number > 0);
    var isNumberEven = (number % 2 === 0);
    var isNumberZero = (number === 0);

    return {
        isPositive: isNumberPositive,
        isEven: isNumberEven,
        isZero: isNumberZero
    }
}

console.log(numberInfo(-1));
// Should return the following
// {
//     isPositive: false,
//         isEven: false,
//     isZero: false
// }

console.log(numberInfo(6));
// Should return the following
// {
//     isPositive: true,
//         isEven: true,
//     isZero: false
// }

console.log(numberInfo(0));
// Should return the following
// {
//     isPositive: false,
//         isEven: true,
//     isZero: true
// }

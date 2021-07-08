
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



function max(arrayOfNumbers) {
    return Math.max(...arrayOfNumbers);
}

console.log(max([4, 34, 193, 2, 345, 46, 0]));

console.log(max([-34, 83, 21, 38, -2039, 3.2]));

console.log(max([54.5, 2, 34, -93]));




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


console.log(mostOccuringNumber([8, 93, -62.0, 28, 27, -62, 32, 8, -62]));


console.log(mostOccuringNumber([73.5, 8, 0, -3, 3.50, 8.25, 3.50]));



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


function dateStringToObject(dateString) {

    var splitString = dateString.split("-");
    return {month: splitString[1], day: splitString[2], year: splitString[0]}
}

console.log(dateStringToObject("2016-2-13"));

console.log(dateStringToObject("2005-11-29"));

console.log(dateStringToObject("1994-12-21"));



function reverseString(string) {

    var revString = ""

    for (let i = string.length -1; i >= 0 ; i--) {

        revString += string.charAt(i);
    }

    return revString;
}

console.log(reverseString("squid"));

console.log(reverseString("tilda"));

console.log(reverseString("2016-02-13"));



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

console.log(numberInfo(6));

console.log(numberInfo(0));
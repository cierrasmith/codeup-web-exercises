//filter

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(function (singleNumber){

    if (singleNumber > 5) {
        return true;
    } else {
        return false;
    }
})

console.log(filteredNumbers);

const users = [
    {name: "walter", job: "intern"},
    {name: "sally", job: "associate"},
    {name: "tim", job: "manager"},
    {name: "rob", job: "CEO"},
]

//multiple ways of using the filter method

const higherManagementUsers = users.filter(function (user) {
    if (user.job === "CEO") {
        return true;
    } else {
        return false;
    }
})

const interns = users.filter(function (user) {
    return user.job === "intern"
})

const associates = users.filter(user => user.job === "associate");

console.log("Here are all of the higher management users", higherManagementUsers);
console.log("Here are all of the interns", interns);
console.log("Here are all of the associates", associates);

//map (allows us to return a new array when we have done something to the original)

const doubledNumbers = numbers.map(function (number) {
    return number * 2;
});
console.log(doubledNumbers);

console.log(numbers.map(num => ({bob: num / 2})));

const workerDetails = [
    {name: "walter", job: "workers", pay: 12},
    {name: "sally", job: "workers", pay: 13},
    {name: "tim", job: "workers", pay: 14},
    {name: "rob", job: "workers", pay: 15}
]

const updatedWorkerDetails = workerDetails.map(function (worker) {
    return worker.pay * 1.05;
})

console.log("old Details", workerDetails);
console.log("updated Details", updatedWorkerDetails)

//reduce

const sum = numbers.reduce((currentTotal, currentNumber) => {
    return currentTotal + currentNumber;
}, 0); //0 is the starting value

const randomNumbers = [58, 82,102, 4343, 2];
const largestNumber = randomNumbers.reduce(function (currentHighestNumber, number){

    if (number > currentHighestNumber) {
        return number;
    } else {
        return currentHighestNumber;
    }
}, 0);

console.log("LargestNumber Reduce", largestNumber);

console.log("Reduce", sum)

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {}
    person = {
        firstName: "Cierra",
        lastName: "Smith"
    }
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + person.firstName + " " + person.lastName + "!";
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    // 12% discount if they spend > $200
    // display name, amt before discount, the discount (if any), and amt after discount

    // add .toFixed(2) to have the amount with 2 decimal places

    shoppers.forEach(function (shopper) {
        var discount = shopper.amount * 0.12;
        var newTotal = shopper.amount - discount;
        if (shopper.amount < 200) {
            console.log(shopper.name + " owes: $" + shopper.amount)
        } else
            console.log(shopper.name + " owes: $" + shopper.amount + " after discount: $" + newTotal);
    });

    /*
    for (var i = 0; i < shoppers.length; i++) {
        var discount = shoppers[i].amount * 0.12;
        var newTotal = shoppers[i].amount - discount;

        if (shoppers[i].amount > 200) {
            console.log("Name: " + shoppers[i].name + "\n" + "Before discount: " + shoppers[i].amount + "\n" + "Discount: " + discount + "\n" + "Total after discount: " + newTotal);
        } else
            console.log(shoppers[i].name + "\n" + "This purchase does not qualify for a discount. Your total is: " + shoppers[i].amount);
    } */

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [

        {
            title: "Harry Potter",
            author: {
                firstName: "J.K.",
                lastName: "Rowling"
            }
        },
        {
            title: "It",
            author: {
                firstName: "Stephen",
                lastName: "King",
            }
        },
        {
            title: "Tomie",
            author: {
                firstName: "Junji",
                lastName: "Ito"
            }
        },
        {
            title: "Sailor Moon",
            author: {
                firstName: "Naoko",
                lastName: "Takeuchi"
            }
        },
        {
            title: "Verity",
            author: {
                firstName: "Colleen",
                lastName: "Hoover",
            }
        }

    ];
    books.forEach(function (book) {
        console.log(book.title);
        console.log(book.author.firstName);
        console.log(book.author.lastName);
    });


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    for (let i = 0; i < books.length; i++) {
        console.log("Book # " + (i + 1) + "\n" + "Title: " + books[i].title + "\n" +
            "Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

//     function createBook(title, author) {
//         let name = author.split(" ")
//         let firstName = name[0];
//         let lastName = name[1];
//         return {
//             title : title,
//             author : {
//                 firstName: firstName,
//                 lastName: lastName
//             }
//         }
//     }
//
//     console.log(createBook("book", "author"));
//
})();


// You can also push multiple values in a single push method, separated by commas
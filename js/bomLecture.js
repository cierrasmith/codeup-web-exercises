
setTimeout(codeToBeExecuted, 5000) // runs in milliseconds, this command makes the code wait before running

function codeToBeExecuted() {

    var person = {
        name: "Nic",
        age: 24,
        getInfo: function () {
            return "This is " + this.name + " and he is " + this.age + " years old."
        }
    }

// adding a dynamic object after the function
    person.height = "60Inches";

// counting the length of a string
    console.log("Cierra".length);

    console.log(person.age);
    console.log(person.name);
    console.log(person.getInfo());
    console.log(person.height);
}
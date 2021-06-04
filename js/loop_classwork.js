//alert("I have this working")
/*
var message = '';

var howmany = prompt("How many?");

for (let index = 0; index <= howmany; index++) {
    message = message + "index is: " + index + "\n";
}

alert(message);

alert(index);


//example of a for loop:

for (let index = 0; index > 5; index++)
{
    //do something
    alert("index: " + input + "\n");
}

//example of a while loop:

var index=0;

while (index < 5) {
    //do something
    alert("index: " + index + "\n");
    index++;
}
*/

//example of a while loop:

var notDone = true; //loop

while (notDone) {
    //do something
    notDone = confirm("Do you want to go again?")
}

//example of break and continue

for (var i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        //number isn't even
        //odd numbers aren't as cool
        //skip the test of the loop and continue with the next iteration
        continue;
    }
    console.log('Here is a lovely even number: ' + i);
}
const serverURL = `input url here`


// This is a simple GET request
// fetch(serverURL)
//     .then(res => res.json())
//     .then(data => console.log(data))
//

//POST and GET
function AJAX(url, method = "GET", data) {

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(responseData => responseData)
        .catch(err => err)
}

    AJAX(serverURL, "POST", {title: "We built our own AJAX function"})
        .then(function (data) {
            console.log(data);
        })

    //This is to fetch a single movie
    AJAX(serverURL + "/1") // the /1 grabs the first one, /2 grabs the second, etc
        .then(data => console.log(data))


    //PUT METHOD modifies the existing data, this will update the individual record at ID 9
    AJAX(serverURL + "/9", "PUT", {
        name: "Polaris",
        message: "We are ready for the weekend!!"
    })
        .then(data => console.log(data))

    //PATCH METHOD only overwrites certain portions without replacing everything in the record
    AJAX(serverURL + "/9", "PATCH", {
        message: "We are really ready for the weekend!!"
    })
        .then(data => console.log(data))

    //DELETE METHOD can delete the individual record
    AJAX(serverURL + "/6", "DELETE")
    .then(data => console.log(data))

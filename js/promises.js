"use strict";

// Handle An API Promise
function getUser() {

    return fetch('https://api.github.com/users/cierrasmith/events/public',
        {headers: {'Authorization': myGithubKey}})
        .then(function (response) {
            return response.json();
        });
}
getUser()
    .then(function (user) {
        let lastCommit = user[0].created_at;
        console.log(lastCommit);
    }).catch(function (error) {
    console.log("ERROR!", error);
    });

// Create Your Own Promise

function wait(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        } ,num);
    })
}
wait(1000).then(() => console.log(`You'll see this after 1 second`));
wait(3000).then(() => console.log(`You'll see this after 3 seconds`));
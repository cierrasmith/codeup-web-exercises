"use strict";


// function getUser() {
//     return fetch('https://api.github.com/users/cierrasmith/events/public',
//         {headers: {'Authorization': myGithubKey}})
//         .then(response => response.json())
// }
//
// // // later on...
// // //
// getUser().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.created_at);
//     });
// }).catch(error => console.error(error));

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
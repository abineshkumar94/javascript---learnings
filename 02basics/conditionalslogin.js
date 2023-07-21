// allow user to access course if he is:
// logged in from email
// logged in from google
// logged in from facebook

var email = false;
var facebook = true;
var google = false;

// if (email) {
//     console.log("loggedin success");
// }

// if (facebook) {
//     console.log("login failed");
// }

// if (google) {
//     console.log("login failed");
// }

if (email || facebook || google) {
    console.log("you where successfully loggidin");
}else {
    console.log("loggedin failed");
}
// show user a signout button if he is authenticated,
// other wise show him option to login/signup

const authenticated = false;
 
// if (authenticated) {
//     console.log("show logout button");
// } else {
//     console.log("show login button");
// }

// this method is called ternary operator

authenticated ? console.log("show logout button") : console.log("show login button");
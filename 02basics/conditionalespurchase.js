// user is allowed to make a purchase when he is:
// logged in 
// email verified
// cardinfo - valid
// if any one is missing, stop purchase

var isloggedin = true;
var isemailverified = true;
var cardinfo = true;

// if (isloggedin) {
//     console.log("logged in sucess");
//     if (isemailverified) {
//         console.log("email is verified");
//         if (cardinfo) {
//             console.log("you can make a purchase");
//         }
//     } 
    
// }

// other method

if (isloggedin && isemailverified && cardinfo) {
    console.log("allow user to make a purchase");
}else{
    console.log("you are not allow to do that");
}
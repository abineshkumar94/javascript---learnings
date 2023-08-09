console.log(name);

var name = "abinsh";

//  so im trying to print my name andim trying to print it before it was initialized and declared as well //

//  we have seen that this actually gives us result of undefined.  so undefined is good for front end but not for backend. in the case of backend we need error here so in that case we replace this var delian keyword into let //

let name = "abinesh";  // error is actually a good thing compared to undefined and compared to many other things //


// if (true) {
//     var lastName = "kumar";
//     console.log(lastName);
// };

// so what happen when we move console.log out side //

if (true) {
    var lastName = "kumar";
    
};
console.log(lastName);

// so we can still able to print the name do lot of programmer this is not really a good thing what the habit we have developed is variable which are declared inside the scope should just go away and should not be accessible to me outside here.....so use let keyword //    
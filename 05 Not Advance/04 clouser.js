// function init() {
//     var firstName = "abinesh";
//     function sayFirstName() {
//         console.log(firstName);
//     }
//     return sayFirstName;
// }

// var value = init();  // so first init get called so your global execution context recite here then an executional context of the function init comes up and on top of that this say first name loads up. as soon as the first name actually completes his execution its poof its gone and then finally init poof its gone

// // we get nothing becoz this method dosent executing straightforwardly 

// // so how can i run this thing //

function doaddition(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = doaddition(4);
console.log(5);

// we can also do this thing //

console.log(doaddition(5)(5));

// please watch lexicalscoping and clouser video again //
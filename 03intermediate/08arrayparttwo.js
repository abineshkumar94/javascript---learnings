// function iseven(element) {
//     // if (element % 2 === 0) {
//     //     return true;
//     // }
//     // return false;

//     // minimalistic code//
// return element % 2 === 0;  // advantage of writing this single line of code is that this is always gona evaluate as either true or false and if it evaluates to true that means number is even and if it evaluates to false that means its false so technically this line of code is exactly same as above

// }

// console.log(iseven(3));

// we can also do this and we also know we can put function into a variable like let iseven = function() this is like holding the entire thing inside a variable sometime we dont even use function key word but rather we insert an => here

// const iseven = (element) => {
//     return element % 2 === 0; // we get undefine when we not use return key word because its an arror function 
// }
// console.log(iseven(2));

//       callback function       //

// const iseven = (element) => {
//     return element % 2 === 0;
// }
// let result = [2, 4, 6, 8].every(iseven);  // so what this every actually does it goes into your array and look for every single element and whatever you are gonna say inside this array its gonna do that test or that operation with every single element //

// console.log(result); // notice it comes as true the true actuALLY came because every single element in this actually giving us a result of true in the case of iseven and thats where is every is actually super handy //
//if you try to run [2, 3, 6, 8] it gives you false its give true when all the element are passing our test then only its gives us true result if one of them actually fails us so this is what we are having false

 //          similar code in morden way       /// // for callbacks //


//  let result = [2, 4, 6, 8].every((e) => {
//     return e% 2 === 0; // in lot of cases you are not going to use return key word whenever you not using the return key words that means you not be using the curly braces so remove it which turn as one line of code
//  });  // there are actually couple of ways how you write callback (arrow function callback) so how to write a callback a simple function which dosent have names 

//  console.log(result);

//  let result = [2, 4, 6, 8].every((e) => e % 2 === 0);  // exactly same what we return in past //

// console.log(result);
// //            shortcut to remember this        //   

let result = [2, 4, 6, 8].every((e) => (e% 2 === 0)); // when ever you put the {} you want to return some thing inside but incase you dont want to return something still want to remember the sintax remember these guys (() => ())

// when you use parentheses then() then you dont have to write a return key word if you have to use curly bracecs{} then you have to write the return keyword // 

console.log(result);   // every key word is very importent //
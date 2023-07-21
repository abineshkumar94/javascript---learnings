// array is just collection of data//

//let countries = ["india", "USA", "japan", "russia"];

//let states = new Array("TAMILNADU", "delhi", "kerala", "assam");

//console.log(states);

//arrays are very centric about the position value so when you start with 0 that means you want to acces the very first element of the array and similarly you can go for the 1st element that's technically second but we called it first element because we are starting the count from zero

//console.log(states[1]);//

//console.log(states.length);  // length is a one of the method that shows the length of arrays

//states[0] = "punjab"; // to replace the value
//console.log(states);

let user = ["abinesh", "abi1205.ak", 3, 34, true];
console.log(user);

user.pop();  // pop simply means just getrid of the value which is at the very end...//
console.log(user);

user.unshift("this-value-will-be-added-in-first-of-all-value-while-using-unshift");
console.log(user);

user.shift(); // the value which is added new is gone//
console.log(user);

console.log(user.indexOf(3)); // its shows the position of the value ex indexOf 3 is 2 its position
// when you trying to find somthing which is not there its will showes -1 value which is very handy we can do comparision like in if and else we can compare like if the value is -1 dont delete it because its not there in array rather pop up a message to the user that the element you are trying to delete or teying to find is not there//

console.log(Array.from("abinesh")); //it will convert any thing into array one of such thing is simply the string there are many thing you can pass on in here//
// now whats happening here is the entire string is now converted into comma seperated values and this isjust one advantage of it we can pass on sets and a whole bunch of other things//

//........................try to spend more time in array..............................//
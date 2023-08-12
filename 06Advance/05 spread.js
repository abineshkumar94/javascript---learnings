// var returnedValue = Math.max(2, 5, 7, 4, 2, 9, 8);
// console.log(returnedValue);       // now what isgonna notice in this case is weget 9 it automatically picks whoever is the biggest value now what if i nowwhat if i removed that 9 its gonna pick the next value /

// // but notice we were able to pass on multiple on multiple arguments or mutiple numbers to it. it work fine with five elements it works fine with eight elements it work fine nine also so somehow behind the scene this max method is define in such a way that it can take as many list of values as it can //

// // and this is not the only one we have other one as well //

// var myObj = {}

// Object.assign(myObj, {a:1, b:2, c:3}, {z:9, y:8, x:7});            // now once we used assign it required you to pass on a couple of parameters first and formost what is my target my target is (myObj) and then it required list of sources so you have to pass an object there //

// console.log(myObj);       //   i get a result which is compiled by mixing all the objects that i am giving it first its putting up all these things into the target which is the very first parameter //

// // function sumOne(a, b) {
// //     return a + b;
// // };

// // console.log(5, 5);  // its a simple function //

// // now the challenging part. let just say you have instead of having 5 + 5 you are having an array lets call it as (myA) and this is an array of 5 + 5 can you pass on this. i show this in below //

// function sumOne(a ,b) {
//     return a + b;
// };

// var myA = [5, 5];
// console.log(sumOne(myA));   // can we do this. it says 5, 5 undefined. this is the fact that when the type of the data dosent really match it happens. if we want to add 1 (console.log(sumOne(5, 4, 1))) more of to this the result is pretty obvious it adds a  5 + 4  and 1 is being idnored so any thing what this function dont understand is gonna be ignored 

// // and same exactly happens just there (myA) so when i said hay iwant to add myA it first tried to do it and once it says i dont know what is happening so it just printed them as it is //

// // when your function expects individual value but youre value comes up as a pack or a bunch right now this is array but it come it can come up with variety of other bunches like maybe an object in that case if you dont want to change the function defenition all you can do is come up and put up these three dots ...myA and when we run this we get the answer back (10)

// function sumOne(a ,b) {
//     return a + b;
// };

// var myA = [5, 5]; // for example var myA = [5, 5, 1] this is gonna be ignored keep an eye on this //
//console.log(sumOne(...myA));   // so this is spread operator //

// so what spread operators does it takes the group and it tries to spread it into the multiple values right now it is array but again i mentioned this one more time it can be in any other format maybe object maybe any thing else //

// another syntax of that // 

// function sumTwo(...args) {       // so i want to add as many value as you would like to give it to me so in that case what ill say is i want to expect i dont know how manyarguments aregonna come in two numbers or maybe five numbers maybe 10 numbers so in that case when you are not very sure that how many arguments are come in then you put three dots followed by a variable like this (function sumTwo(...args)) args is most common variable name but it can be sperman to no problem in that now what you have to do is expect that this arge is gonna be an array and we need to loop through the values so that is the most important thing always expect when you are having this kind of statement (...arge) in function that an array is gonna come up so how do we add the values //
//     let sum = 0;
//     for (const arg of args) {
//         sum = sum + arg     // or shorthand notation of this one sum += arg both are exactly same once
    
//     }
//     return sum;      // now how many values really comes i dont really care two value im gonna still loop through them 200 values im gonna still loop through them 
// }

// console.log(sumTwo(2, 3));

// // let try to add more values //

// console.log(sumTwo(2, 3, 1, 5, 7)); // so this is rest operator // so rest operator does a little bit different thing which is done below //

// function sumTwo(...args) {
//     console.log(args);
//     let sum = 0;
//     for (const arg of args) {
//         sum = sum + arg
//     }
//     return sum;
// }

// console.log(sumTwo(2, 3));

// console.log(sumTwo(2, 3, 1, 5, 7)); 
 // notice args convert individual value into the array so these are almost reverse of each other. the other one what this was doing this was actually taking these array and trying to seperate them out individually and passing it as individal values but when we use it like in this syntax (...args)in sumTwo this is now a rest operator means its gonna spread out or basically you can say its gonna take these individual vales and its gonna bunch them as together into an array and thats why we are able to use for off loop may be you want to use for each thats also fine //

// for some weired reason you want to take first two value always want to return a product of it may be multiplication and for the rest of the values these values are going to be added up so can we pull ths off yah its easy //

// go to the function and add these function sumTwo(a, b ....args) so first two arguments will be treated as an A and B individual parameters or arguments and rest of them will go in to args //

function sumTwo(a, b,...args) {
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg
    }
    return [sum, multi]
}
console.log(sumTwo(2, 3, 1, 1, 1)); // you see [1, 1, 1] is actually coming up because we actually console.log it. so first two values are being ignored notice at the sum so the sum first and formost we get return [sum, multi] sum as 3 so 3 is the sum of last 3 values and the product the multi which we are getting is 2 multiplird by 3 and we get 6 up there //

// multi operator look about it //
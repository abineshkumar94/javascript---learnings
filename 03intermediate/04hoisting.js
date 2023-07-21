// var num = 2;       // alredy global context running about this movement collecting information about this code

// function sayme() {  // global context
//     console.log("say me");   // global context
// }

// sayme()    // as soon as i call this method an other context called execution context kickesin

// // the holeidea about global context is to collect information 
// // but as soon as you like to run a code like console.log() which has one line of execution context its kickesin and goes away
// // but when you call a function here like sayme() so entier function needs to be executed..so execution context will come which is responsible for the function

//                         //reffer your note for more//





// function tipper(a){
//     var bill = parseInt(a); // insted of using the value like this var bill = a; wecan use var bill = parseint(a) so parseint is gonna convert the string into a actual useable number
// console.log(bill + 5);
// }
// tipper("5"); // when we add the value in string for example "5" the out come value is 55 so to avoide this use ..parseint..


// // if i move the code like this//

// tipper("5");

// function tipper(a){
//     var bill = parseInt(a); 
// console.log(bill + 5);
// }

// i will able to run a code without any problem because the global execution context scans my entire code and make function to me if they are declared 
// if they are not declared (when we comment that out) so it was never defined anywhere in my code


// function bigtipper(a) {
//     var bill = parseInt(a); 
//     console.log(bill + 50);
    
// }
// bigtipper("200");

// let just say we move the bigtipper to the top before declaration of this function its also runs fine what we do next is change the function like that

// bigtipper("200");

// var bigtipper = function(a) {  //this is also a valid code we see this when we execute this code error will come (this variable is undefined the global context dosent know about it)
//     var bill = parseInt(a); 
//     console.log(bill + 50);

    
// }
//so whats happening in above code is the big difference is in upper code that is function but this is variable (go through the rule)

//keep this in mind//
// if youre declaring the variable then then this syntax is should always come first  (var bigtipper = function(a) { var bill = parseInt(a); console.log(bill + 50);) (bigtipper("200");) and this at end
// and if you are declaring a pure functions it dossent matter

// var name = "abinesh";
// console.log(name);
// // so what we do like this//

console.log(name)
var name = ("abinesh");
//according o the global context when you try to use it global context knows it that you have a name being declared later on all you are trying to access it first
// in that case remember the line again that it is made as undefined and undifined is what in the rule
// undefined is completely defferent from error....global context is smart and is collecting all the value the proof of this is if we just comment the code (var name = "abinesh") out so this variableis not available and im trying to use it when i try to run this this gives me an error that this name was never avilable
//but in the previous case in thr global context know this that yes variable is availableits just a matter of facts thats right now it is undifined because i have collected the information and youre trying to use it first

function sayname() {
    var name = "MR. A";
    console.log(name);
}
sayname()
console.log(name);
//out put will be undifined,abinesh remember the diagram the execution stackwhich is at the top is the only thing which my program knows about so if there are multiple name being define in these execution context it cannot actually dig below it and try tofind it that variable
//here in the first execution context if i say name is abinesh and the second one if i say name is MR. A it dosent know about mr. h it can only execute inside its entire context 
// so when i add sayname() above the console.log now new context is being loaded at the top of global context 
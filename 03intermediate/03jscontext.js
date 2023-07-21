// sayhello();    // so how js knows that when iam using this function 1st no intraction here so how its knows...so this all about global context of javascript

// function sayhello() {
//     console.log("hello");
// }

// read about global objects


var myname = "abineshkumar";
if (myname === window.myname) {
    console.log("this is true");
}

//window is not define since the code is executed by node here the global context is not avalable
//the global context is deffer little bit when you execute a code in node while execute a code in browser
//always there is a consept in js that need to be a context that contaxt is responsable for above thing (1st line of code)
//so all of the thing is register inside context so that once the function is registered thatfunction is wrapped up and put in side the global context so when ever you need that you execute the it avare of those functions so thats why you dosent gets error in line one to four
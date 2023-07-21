//todo part 1 for this key word

console.log(this);  // the best way to find out the global context is to just print out (this) key word it will gives you a whole lot of idea that what your execution engine v8 engine or maybe other browser engine what they are holding up for you and what properties are there inside
// if i run this code it will gives you a empty set of parentheses which is an empty scope {}
// node is support v8 engine thats why its showing empty scop but we take this onto the browser youre gonna see something which is diffrent

//when i run this in browser we get getting a global context this time which is a window here and which has lot of properties

function sayname(){
    var name = "abinesh";
    console.log(this);
}
sayname()

// simple we have a (this) key word here which gives an access to the global context and global context differ in the situation //
// in the case of node it gives me an empty{} scope in the case of browser it gives me an access to window object //
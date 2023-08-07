// now lets assume a simple scenario so for we have seen that every single time i want to create an object iam giving user than im saying first name last name every single property is something that i am assigning to it which is not usually the case //

//  lets get a case of lco every time a new user is signed up or is gets asign up on the website thare are some properties that i want to assign to them whats their first name last name are they signed up with google or not how many coures count are there in their account and probably some bunch more as well i cannot manually go ahead and define them so i need to create kind of prototype there that should follow that every single user gets up these properties should be filled up as well as the most important thing is it should be unique userin itself its not like your course account and my courses should get matched up so every time a new instance should be created 

// it is recomended when you are using prototypes you actually go ahead and use upper case letter (User)


let User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;    //  this is one of the other way of defining objects //  this is functional approach of defining the object and that is the recommended way of doing it and thats why you see allthese inside prototypes all these functionals up here in dev tools in browser there is constructor thereas well // when ever the constructor involved usually there is a new keyword involved 
    this.getCourseCount = function () {
        console.log(`course count is: ${this.courseCount}`);
    };
};


//.........................prototype..................//


User.prototype.getFirstname = function() {
    console.log(`Your first name is : ${this.firstName}`)
};


// pls...pls..read about it more //  (pls read the blow lines and come here last) now the advantage of this is every time a new instance is created (you dont know what instance means pls read below) its the job again of this new keyword to even find all these such prototype which are defined and inject that further in my user object..//   if i load this entire script on to the browser what youre gona notice this proto if i just drop it down on the browser youre gonna see that now this proto has this property (getfirstname) which is technically in function and is trying to access all this up here now // 


// above this is a prototype almost like a blueprint yes we are getting somewhere like classes but not exactly so we have defined this blueprint here or a prototype for every single user who is gonna sign up on our website so let just say 1st signup on my website is my self //


//let Abinesh = User("Abinesh", 2);
//console.log(Abinesh);  // there is problem in this code when we logged it we get undefined. so we definitely have correct version of my prototype but somehow is not creating an object. but only issue having if you want to create an object through this functional way then the new keyword actually kicks in and t his is not onl y gonna create an object for as this is gonna do multiple task for it 

let Abinesh = new User("Abinesh", 2);

Abinesh.getCourseCount();
Abinesh.getFirstname();

//read this and next line after finishing prototype       //before asking this Abinesh.getFirstname() i cane actuall cut this out and write a conditional run  //

if (Abinesh.hasOwnProperty("firstName")) {
    Abinesh.getFirstname();
};   // so why we are doing like this becoz to be error proon if property like there is a mistake like ("firstNamee") when i run this one i never call this method because im asking the wrong property here and see my can do if you have this property and not and definitely these thingscan helps you a lot //

//console.log(Abinesh);  // the advantage of this is i can come here and add another user like below. so what happens there is very interesting and most usefullstuff. there is two seperate instances of user is created or simply saying two copies of user are being created 1st is having the properties that we have set second is having totally different properties but we are still able to use this prototype 

let kumar = new User("kumar, 3");

kumar.getCourseCount();
kumar.getFirstname();


//console.log(kumar);

// new keyword is responsible for actually using the syntax in our above prototype second thing is this new keyword is responsible for invoking the custom constructor and creating a unique instance every single time so no matter how many time you use new keyword a new copy of this entire object will be created. and its also take care of this keyword. (for this keyword) above prototype is a function okay and we got a this keyword and you told us that whenever there is a regular call of function this keyword always points towords the window object and there it almost looks like a regular call of the function defined up there so if seems to be a regular call notice we didnt use new key word it said undefined becoz at that pointof time when you where notusing the new keyword this was pointing to the window or the global object in our case of node it was pointing towards the empty object so thats why nothing was happening it was saying undefined//
               
// just remember as soon as you use this new keyword this is not a regular function call and when there is a not a regular function call that means this keyword is not going topoint towards the window object //

// so if you didnt get this pls watch the NEW KEYWORD in javascript video again //





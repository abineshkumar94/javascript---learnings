// import User from "./06classjs"; // this is the syntax being used in many framworks many libraries but not workeshere //

// how this is going to work in our case is going to be simply having below in mentioned //

const User = require("./06classjs.js")  // this is how its gonna work //

const Abinesh = new User("Abinesh", "abi1205.ak@gmail.com")      // im going to say Abinesh is going to be an object and in order to create new object we use new and creates new object of type User. and since we have said constructor thats why its asking methat hey provide me name and email a constructor is a method which runs as soon as the object is being crated 

console.log(Abinesh.getInfo());     // it showing the result perfectly // console.log(Abinesh.getInfo().email) which is gonna give directly email but this is not a good way. not a good way of changing directly rather holding it in variable and then doing this stuff is much better // 

Abinesh.enrollcourse("react bootcamp");
Abinesh.enrollcourse("angular bootcamp");

console.log(Abinesh.getcourselist()); // and we can see that we are receiving an array which is react bootcamp and angular bootcamp //

// now majority of the thing that you be reciving from database from classes and bunch of other things are going to be arrays or objects and we need to learn how to loop through them so its easy to looping through first we want to hold it though the variable//

let courses = Abinesh.getcourselist();

courses.forEach((c) => console.log(c));  // c for courses // and we see that now instead of the array we are able to dump out the values as a single line surely you can do much more then that 

// rewatch the video for more clarification video name classes and module exports in javascript //



















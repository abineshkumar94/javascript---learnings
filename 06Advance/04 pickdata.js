//............how to pick the date or destructuring of the data................//

// destructuring of data take place in lot of places  and its very common technique that is being used in javascript //

// the whole idea behind these destructuring is just remember this one single concept that whatever is the data type on the righthand side similar data type should be on the left hand side and then probably you can do destructuring //

const user = ["Abinesh", 3, "admin"];   // now what we can do in case you want to destructuring right now if i want to access any of that i have to access it through the syntax of saying name and then calling it like the first value or something like that. like below //

 console.log(user[1]);

// // we can also store this value in variable //

 var role = user[2];
 var name =user[0];
 console.log(role);

// // so nothing new here the new thing actually comesin when you want to seperate things on the go //

 var [name, coursecount, role] = user;  // now this what is gona do is automatically gonna gobehind the scene will say that okay right hand side there is an array with three value and on the left hand side also we got three vales so an equal sign is here that means i will pick up these values and well fill these value with these variables gonna be filled with this value // 
 console.log(role); // all are same //

// so these is not so common to work with these destructuring of data on array most of the time youre gonna see people work with an objest //

const Myuser = {
    name: "Abinesh",
    coursecount: 5,
    role: "admin",
};       // so now how can i print each of these values thats simple //

console.log(Myuser.coursecount); // so these is how i an access each of these value // if youre gonna be using this syntax (Myuser.coursecount) probably like 50 times it make sence to not to use it this much of a big line rather i would preffer to use something like course count or my course count or something like that so what i can do is destructure this object it simple //

const {name, coursecount, role} = Myuser; 
console.log(coursecount); // the above one and below one are definitely give us the same result but there is a little bit more to it lets just say my course count here so what is going to happen now is it through undefine so how come this is undefine we are having three values here and thre should be three values and this is specifically the destructuring of data..... in order to destructure definitely the type should match (names should be match as they are designed in the object) 

// most important thing in destructuring is mack sure the names are exactly same we saw that in the case of array there is not hard code requirement because it works a little bit different there but in case of object it is important that we keep the name same //








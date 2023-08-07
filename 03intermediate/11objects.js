let summa = {
    firstname: "abinesh",
    lastname: "kumar",
    role: "admin",
    logincount: 32,
    facebooksignedin: true,
}

//       so how to access the value from objects     //

//console.log(summa.firstname);  // so whatever object is just wright the name and put the dot there let just say i want to print out the firstname type it and run the code //
 
//     other way to accessing the object  //

//console.log(summa["lastname"]) // here the lastname parameter should be in string "" otherwise you get a referenceerror //

// you can also manipulate the value as well you get the access to it that means you can change it for example summa.logincount = 42 it will change the value or parameter

summa.logincount = 42;
//console.log(summa.logincount);

console.table(summa); // explore more about console. thing //
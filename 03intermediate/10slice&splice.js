const users = ["ted", "tim", "ton", "sam", "sor", "sod"];

console.log(users.slice(1, 3));   // so how does the slice actually works for example im gonna say start at position 1 and endat position 3 so whats gonna happen its gonna start at position 1 so 1 to 3 so 3 is not gonna be included so thats gonna be the result of this slice 1, 3

// ifyou passed only one value like console.log(users.slice(1)) here "ted" is being sliced of  //

//                 splice                 //


users.splice(1, 2, "hi");  // when i run this it started with 1 with "tim" and then itsays 2 so it is assumed that all of these take allof these out splice them out and insert hi in thoseplaces but that is not how its works the first value is actually start value but the second is not the end position it is the count value in this case so count 2 here from the position number one and then just delete them off and insted of them just insert the value whatever im providing so from one it counts out 0 this is 1 so it says 1 how many should i count to so count "tim" and "ton" and insted of them replace this "hi" thats exactly what happened  
console.log(users);
//    for loop or any loop has a given fact is used to iterate through over the things. if i want to go over the things again and again and do something on that thing for that the loops are used  //

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }                      //   this i simply stands for index and the loops are majorly used to iterate through over arrays thats why youre gonna majority time they started with 0 

// after that we need something we have started the loop we need some end point of the loop as well we cannot run it for infinity so we need some thing to monitoring so that this is where you should stop  so im gonna say that im gonna hard code the value so i should be < 10 so this is my value so just keep on a running start with i is equals to zero and keep it running till you hit i is less then 10 but how should i know that i is gonna be increasing so that it reaches at one point of time to the 10 for that we gonna use i++ or i = i+1 //


const mystates = ["tamil nadu", "delhi", "assam", 1994, "rajesthan", "maharashtra"];

// we are going to loop through these arrays //

//for(i = 0; i <= mystates.length; i++){     //  in a for loop we are gonna start with 0. 1st we say let i = 0 o need to call it i call it h or x it depends on our self. next i <= 10 but why10 we dont need to hard code these values in fact in the loop cases youre never gonna be hard coding thevalues we want to find out the length or how much long this array is then i++
    //console.log(i);    // so were gonna say i want to print out my states and if you remember the old lesson we can access the value of each in the array by using thesesquare brackets and mentioning the index value 0 r 1 r 2 so all of that so for example if i want to print out the 0 values here console.log(mystates [0]) now its gonna print out the first value but again and again so iam having the variable i which i can use in side and loop through all values from entirety at the end of the array //
  //  console.log(mystates[i]);  // if undefined comes in last remove the <=   = sign //

//}       

 // so what i want noe is i dont want that 1994 to be printed i want only all the strings to be printed //

//  for(i = 0; i <= mystates.length; i++){
//     if(typeof mystates[i] !== 'string') continue;       //  im gonna say that value is not equals to the string or we can check it for numbers aswell. so im gonna say continue key word. so what gonna happen with continue key word continuing is like continue it just say keep on continuing this perticular condition. // 
//     console.log(mystates[i]);
// }

// another key word called break. break is like break its gonna say hey just stopevery thing do not continue donot do anything else after this just stopped everything so what happenes in this case is as soon as it matches the condition its gonna stop the execution and rest of the code or rest of the block of the for loop is not gonna execute after that //

// for(i = 0; i <= mystates.length; i++){
//     if(typeof mystates[i] !== 'string') break;
//     console.log(mystates[i]);
// }


//.....................while and do while loop....................................//


// let i = 0;   // in the while loop we declear it out side here //

// while(i < mystates.length){
//   i++;                            // when i usethis kind of implementation iam gonna see some strange reuslt again what will happen is it will cut of the 1st value tamil nadu and show all other value. so the reason for that is every time iam comming in before even printing in the value i increasing the value so its dosent print the zeroth value its will print the first value so move the i++ to bottom //  
//   console.log(mystates[i]);
// }


// let i = 0;

// while(i < mystates.length){
//   console.log(mystates[i]);
//   i++;
// }   // the break and the continue key word also works here as well. break and continue key word is for scope {} so where ever the scope is break and continue key word works there  //


//...........................do while........................//

let i = 0;

do {
  console.log(mystates[i]);
  i++;
}while(i < mystates.length);




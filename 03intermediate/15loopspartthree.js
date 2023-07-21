//......................for in and for of loop......................//

// it gives you some of the syntactical sugar over the classic for loop it has the initialization the declaration as well as we got some checker then we got incremented or decremented so there a whole lot going on treditiona for loop so to simplifythese thing the two more loops are introduced

// one will be used in array one is gonna be used majorly with objects //


// const names = ["youtube", "facebook", "instagram", "netflix", "amazon"];

// for(const n of names) {    // insted of declaring an initialization of the value were are going to use for off loop again for off is majorly used for the array //
//     console.log(n);            // the advantage of this loop is i can simply go ahead and simply say log and n or whatever you have called this value this can be n, h, abinesh, superman,etc  //
// } 


//..................for in loop................//


const symbols = {
    yt: "youtube",
    ig:"instagram",
    fb: "facebook",
    lco: "learncodeonline.in"
}

// for(const n in symbols) {
//     console.log(n);           // so it gives us the keys back and thats what it should be giving back because accessing the value from the key is super easy so how we can do that actually console.log(symboles[n]);
// }

// for(const n in symbols){
//     console.log(symbols[n]);
// }

//  but majority of time people use backticks //

for (const n in symbols) {

    console.log(`keys is ${n} and value is: ${symbols[n]}`);
}

//            fill   &    filter          //


//var testarray = [2, 4, 6, 3, 1, 5, 9, 8];

//console.log(testarray.fill(0));  // we see that all of the value are now turned into zero because i passed it on 0 there let judt say if i pass on edge as a steing like "a"

//console.log(testarray.fill("a")); // it fills all of the value with that particular element that we passing it up there

//console.log(testarray.fill("a", 2, 5));  // so the whole idea is having a start and the end point so the first variable is always like what you want to fill it up and this is gonna apply it tothe entirety of the array the secont argument is about what should be my start position so there 0, 1, 2 so from 2 position just go ahead and fill all of this value in most of the programming the start range is inclusive and the end range is exclusive so make sureyou keep that in mind

//            filter           //

const mynumber = [23, 24, 25, 55, 66, 77, 87, 98];

//const result = mynumber.filter( (num) => num != 55);  //now filter what it does it actually expects you to passon a callback. wright now we use callback and arrow function so how does the arrow function works simply go ahead and use these guys

  // so it filters the value 55  // 

// other example //

const result = mynumber.filter( (num) => num < 55);

console.log(result);
// var name = "abinesh";

// console.log("line number 3", name);

// function  sayname() {
//     console.log("line number 6", name);   // so this guy dosent have ice cream so it from global scop line number 1 //
// }

// sayname()


// //ading some line//

// var name = "abinesh";

// console.log("line number 3", name);

// function  sayname() {
//     var name = "MR. A";      // we add a variable here so since both of them has their own ice cream so you can eat your own ice cream
//     console.log("line number 6", name);  
// }

// sayname()


//...................reffer your note....................//


var name = "abinesh";

console.log("line number 3", name);

function  sayname() {
    //var name = "MR. A";      
    console.log("line number 6", name); 
    

     saynametwo();
    function saynametwo() {
        console.log("line number 38", name) // so its dosent has name (ice cream) its going to ask the above guy line number 32 for name (ice cream)
       
    }
}
sayname();



//remember you can go as much as above but you cannot ask the below guy for name (ice cream)you can ask elders
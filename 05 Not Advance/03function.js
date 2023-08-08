//......................self executing anonymous function and functional programming.....................//


// normal function //

function sayhello(){
    console.log("i say hellow");
    console.log("say hello again");
}

sayhello();

//  immediate executable function  //

// first thing wrap everything up inside the paranthesis//

(function (){
    console.log("i say hello");
    console.log("say hello again");
})();

// self executing means nobody should call it and anonymous means it shouldnt have a name //

// read about it search IIFE or the title its important for interviews//   // watch hitesh's functional programming video //
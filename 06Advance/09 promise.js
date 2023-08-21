//......promise async and await in javascript.......//

// so we saw in the previous section (dos) is creating problem and somehow i want that once the dose is all finished up whatever the call he is making to database, web API is or anything then i want my (tres) to execute so i need to learn how can i write that kind of javascript //  


const uno = () => {
    return "I am One";
};

// const dos = () => {             // after reading 40th line come and read this // const dos = async () => {} if i come on to this dos its not really a perfect way this is just for example go ahead and say that ( async ). now just notice what comes up in place of this undefined it showing like this ( promise { undefined }) there is a promice involved which is not yet being fulfilled now go and read 42th line //
//     setTimeout( () => {
//         return "I am two";
//     },3000);                            
    
// };

//  look this block of code you should read last starting from 19 to 26 first take a look above code. this is for promise //

const dos = () => {      
   return new Promise((resolve, reject) => {         // notice just we were creating these new object just like this we have done this in the past similar to this you can actually create a promise // you can keep your promise or you can just disregard your promise so same thing happens here as well inside this call back there we go either are gonna be resolving your promise are gonna get rejected from your promises. resolved means everything got good and whatever you wanted to bring from the web is giving you a good response and then there is reject as well that means hey something got wrong its sick its an error part its almost like a try-catch and then we got some bad thing happen. so how doesit work both of them actually a method resolve and reject so how does it work you can simply go ahead and say resolve(any msg here) so now our promise is getting reolved // 
    setTimeout(() => {
        reject("I am two");     // read this line after reading the line 38 // im gonna say this is now reject now notice there is strange is gonna happen. when is executed it says I am One and its wait for three second and nothing we got problem here it says hey there is unhandled promise rejection warning that says i am two all the way were getting the same iam two but it was not supposed to get like this insted whenever we are calling something like reject there should be an error but since we are throuing up i am two its getting i am two so its important that we dont. reject means im raising up an error so you should be concerned about that error either handle it nicely or im gonna crash the program. but promise is not just it promise has a little bit more to it  //
    }, 3000);

   });   
};



const tres = () => {
    return "I am Three";
};

//uno();
//tres();    //  previously we were doing all of these three call like this. so we dont want to do like this so we want to create some variable that call these methods hold the value that coming upback and then probably we want to do the console.log so for that we are gonna create a simple method lets call this one as (callme) // 
//dos();

const callMe = async () => {              // read this after finishing 26th line there are couple of new keyword that is async and aweight so when ever you are macking such call inside the method you have to make that method as asynchronous just by adding the keyword asynchronous its not gonna do anything nothing at all but all the values for which you are making a asynchronous call and you are wating for a few minutes there we can use another keyword which is going to be await this await keyword is a symbol first and formost we make the entire method as asynchronous there canbe multiple await calles here. await keywords say is that hey hey this is important what we are doing here is so untill unless im doing entirely im finished doing entirely what this dos method is doing dont just leave me here. so everybody is gonna be sitting in the queue will be waiting nothing will execute after that and then we are gonna do it. if we execute this code first it shows I am One waiting for 3second on then it showing I am two and I am Three so this is a classic example of promises a resolved reject and all of that. so what happens if it get rejects go and read line 22 //
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();

// if i go ahead and run that above code the out put will be [ I am One, undefined, I am Three ] and this is more over a classic case of how things are gonna happen in production you are using and you are assuming that this value is comming on an instant ( valTwo ) and you are printing that it says hey i dont know what you are printing it has never fill the value yet and then we are getting the ( valThree ) //

// so this is more over a refined version of what we studied in the last one //

// so there are three things involved in here first promises, and then there is async and awaite //

// so what happens many times youre gonna make a web request or were gonna make an API request or maybe a database request that database request to you it look like hey that should fill up like instant but even when the databases are even on the same network of AWS or any other hosting that you are using they take probably a millisecond or probebly more to just get a connection and then getting it back so if youre gonna call it and treat it like a local variable you are always gonna get into trouble anything is a resource maybe even if you are taking up some of the locl storage or something then its good idea to have something written in an asynchronous manner //

// so what is promises. promise is something which has two states either it is gonna be fulfilled or it is not gonna be fulfilled so its something like a variable is saying to you hey i promise you that ill bring something from the web in just a few miniutes or probably its saying hey i got failed i got nada for you so we can create promises just like this so promises is an event which is tentatively might be fulfilling up in the future or might be not but its gonna give you the response back that hey i didnt got completed so just like we can create objects we can create arrays or we can create object from our custom defined classes we can create similar thing with the promises //






















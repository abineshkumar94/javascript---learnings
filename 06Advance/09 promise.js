//......promise async and await in javascript.......//

// so we saw in the previous section (dos) is creating problem and somehow i want that once the dose is all finished up whatever the call he is making to database, web API is or anything then i want my (tres) to execute so i need to learn how can i write that kind of javascript //  


const uno = () => {
    return "I am One";
};

const dos = () => {
    setTimeout( () => {
        return "I am two";
    },3000);                            
    
};

const tres = () => {
    return "I am Three";
};

//uno();
//tres();    //  previously we were doing all of these three call like this. so we dont want to do like this so we want to create some variable that call these methods hold the value that coming upback and then probably we want to do the console.log so for that we are gonna create a simple method lets call this one as (callme) // 
//dos();

const callMe = () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();

// if i go ahead and run that above code the out put will be [ I am One, undefined, I am Three ] and this is more over a classic case of how things are gonna happen in production you are using and you are assuming that this value is comming on an instant ( valTwo ) and you are printing that it says hey i dont know what you are printing it has never fill the value yet and then we are getting the ( valThree ) //

// so this is more over a refined version of what we studied in the last one //
























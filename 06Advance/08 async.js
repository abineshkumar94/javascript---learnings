 //........................Event loop.......................// read concurrency model and event loop in MDN//

// javascript is first and formost a web lang. the bydefault nature of javascript moreover like execute the code as much as you can just right now and deal up with thise async things latter on fasion //

// so what is event loop. its a loop which looks for the event //

const uno = () => {
    console.log("I am One");
};

const dos = () => {
    setTimeout( () => {
        console.log("woohoo");
    },3000);                            // read this block of code last // so when i run this code last first ( I am one, then I am three and next I am two ). now i exceange the position into original like uno, dos, tres and the their values one, two, yes two is called up and this guy (settimeout) was all lazyed up. so console.log("I am Two") says hay i any body in the house who wants to execute becoz iam following a event loop . it say hay there is this guy he is super lazy dont want to execute now is the anybody in the queue who comes forward  // 
    console.log("I am Two");
};

const tres = () => {
    console.log("I am Three");
};

uno();
tres(); // so what is call thisthing as second the result willbe i am one, i am three, i am two //
dos();


// read this line after reading 14th line // just a side note (settimeout) this is just a settimeout but it could have been loading out of the picture, some info from database, info from web Api. now notice if it would be a some information that you are getting from the database and since you havent got the information from the database is it ok to lode some of the other things which are dependent on setTimeout block of code. no i dont want to do that. so we need to look for that. that i dont want to execute rest of the things before settimeout takes it all of the time and execute it //

// if you didnt get this pls rewatch the video Event loop in js its clear there //






















































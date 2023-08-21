fetch('{"categories":[],"created_at":"2020-01-05 13:42:23.484083","icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png","id":"4Qd4ew8MQ4Sjj7BFVZqYyA","updated_at":"2020-01-05 13:42:23.484083","url":"https://api.chucknorris.io/jokes/4Qd4ew8MQ4Sjj7BFVZqYyA","value":"Chuck Norris can steal free samples."}')    //  fetch always gonna give you a promise and as we saw once a promice is being resolved you can just go ahead and chain on as many then as you like .then are for handling all of the positive response means success response //
//.then()    // if three .then() whatever is going to be the result of this whatever this is gonna say return this is going to be returned to the next .then() what the second. like what first .then() says  return lets just say A. now A is gonna be passed on to next .then() when that second .then() says return B this B is finally gona be processed to the last .then(). the returns that are gonna be given from the top actually gets back in the bottom and if some reason maybe the website is down maybe something else is going on wrong then we can just fire off a .catch() it is almost a try-catch syntax read about that syntax//

.then((response) => {          // here we call it as response feel free to call in any name //

  //console.log("API: ", response.json());      // if you log this in node it wont give the answer copy the code and run in chromes console 
    return response.json();
})      

.then((data) => {
    //console.log("DATA IS :", data);
    var joke = data.value;
    console.log("JOKE", joke);
})

.catch()















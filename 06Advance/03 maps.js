//.......another things in moden js is maps now im not talking about the map which we use majorly for the looping concept and if you use that surealy is a good thing but you will never be able to understand that how that map is working ifyou dont understand theclassic data type of the map i shouldnt be calling it rather clssic becoz it was not there eariler it was recent introduction in js.................. //


const myMaps = new Map();  // this is always almost like a constructional kind of approch where we create an object from the prototype and stuff like that //

// now map has a lot of properties //

myMaps.set(1, "uno");           // one ofthe common one is set and get. you can add values to them and retrieve the values from it.... they work like objects but remember this maps are not objects they are completely differnt and the values that they store are in the key value pairs here 0 is key so what value can you put the keys can be any thing the values also can be anything //
myMaps.set(2, "dos") ; 
myMaps.set(3, "tres") ; 
myMaps.set(4, "cuatro");

// in the map whats most important for you is to see that how this map actually looked like  //

console.log(myMaps);   // notice the map is giving you by default an answer how many properties it is storing key value so its almost like array.length. and noties its using these arrow signs here and they are just there to make sure you differentiate and you understand that these are not your regular object so the next thing is how can we grab values from these maps..//

// the classic way is to use a for off loop in the maps as well //

for(let key of myMaps.keys()) {
    console.log(`key is ${key}`);
};              //  now this actually automatically go ahead and loop through every single key in the map and here we just printing it out so if i run this wesee that key is a 1234 //

// so now what if you want to get not the key but the values //

for(let value of myMaps.values()) {
    console.log(`value is ${value}`);
};

// what if i want both of them surely we can have and this is where some of the confusion kicks in //

for (let [key, value] of myMaps) {
    console.log(`key is : ${key} and value is ${value}`);
};     // first you have to replace with array and then you get a key and value and since you are grabbing keys and value you dont need any of the methods to run after that no key no values just mymaps and then change the console.log by your wish //  

// and you may ask what is the cofusion in that its very simple its really easy //

// so what happens (next line of code) this my map has an axis off for each as well okey and when you run a for each you know in the for eachyou can pass on the callback and we use an arrow function in the callback and theres gonna be a key that is given to me because here i just saw that the keys available first...these all showen below //

myMaps.forEach( (key) => console.log(`${key}`));  // now this is where most people get most of the confusing up here...so when we notice the out put of this we want a key but it gives you the value here. now this is the biggest issue here and its nota issue its about how we understand the things when we use for off loop we actually first get the key and value when we are using for off thats a classic way of iteraing through the things. when we use morden things like morden version of for each in those values the loop is designed in such a way that it understands that hay you will be doing something with the values and not the indexes and here in the map the key are considerd as indexes so thats why it dosent gives you directly the key so its really not good to say it key rather we should say it as a value and we should use a value here now again it dosent really bother much its gonna give us always the value //

//if you want both of that then surealy we can just like below //

myMaps.forEach((v, k) => console.log(`${v} and key is ${k}`));

// foroff loop is always gonna give you key first and other hand the foreach loop is gonna always gives you the value first // 

// if you want to delete some thing delete a value whose key is probably two so you can go and do this below //

myMaps.delete(2);
console.log(myMaps);

// do little bit research on maps //

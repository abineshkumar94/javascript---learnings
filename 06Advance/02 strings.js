//...................template literals in javascript....................//

let name =  `Abinesh`;                    // 'Abinesh' single cotes is useally reserved to define a single carecter like Abinesh in this case A

//  `Abinesh`  back ticks also known as string literals. and the advantage of this is you no need to skip the cheractors. for example if some reason i want to say Abinesh's we can inject single cotes and double cotes directly like this `Abinesh's` or `Abinesh"s` //

// but on the other cases if im using single or double cotes like this "Abinesh"s" or 'Abinesh's' so it get confused where it get's end so in that case we want to use "Abinesh\"s" like this  soback tickesismuch more easy here it comes in ES6 js //

// and we can use backticks to inject variables as well //

let fullName = `${name} kumar`

console.log(fullName);

console.log(fullName.charAt(0));  // im saying that what isthe charector in the 0th position they also based like array. so its gives output as A //

console.log(fullName.endsWith("y"));  // you can ask weather the caractor actually ends with y so it gives value as true or false

console.log(fullName.includes("Abinesh"));     // we can ask an entier string which is present or not it gives out put as true or false //

console.log(fullName.toLocaleUpperCase());   // it converts entier string as a capital letter it also has many methodes search by using console.log(fullname.to) it automataclly showes the methods  

// strings are treated more over like arrays in javascript but not in other lang //




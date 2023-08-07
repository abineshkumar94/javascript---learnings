let User = {
    name: "",
    getUsername : function() {
        console.log(`User name is : ${this.name}`)
    }
};

let Abinesh = Object.create(User);
console.log(Abinesh);

Abinesh.name = "Abinesh kumar"
Abinesh.getUsername();

// things become much more weired when you want to use the constructor  //

// instead of saying Abinesh.name you want to pass on the properties directly at the time of creation of  the object so that when you use the methods like get user name it just directlygives you output so thats where the weirdness kicks in //

const sam = Object.create(User, {
    name: {value: "sammy" },
    coursecount: { value: 3 },

}); // just doing this becoz this type also exists //

sam.getUsername();
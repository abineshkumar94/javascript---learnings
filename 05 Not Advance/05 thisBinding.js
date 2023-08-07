const Abinesh = {
    firstnmae : "Abinesh",
    lastname : "kumar",
    role : "admin",
    coursecount : 3,
    getInfo : function () {
        console.log(`
           first name is ${this.firstname}
           last name is ${this.lastname}
           his role is ${this.role}
           and he is studying ${this.coursecount} course 
        `);
    },
};


const Ak = {
    firstname : "Rock",
    lastname : "ak",
    role : "sub-admin",
    coursecount : "4"
}

//Abinesh.getInfo();

// now the most important thing comes up the only diffrence right now we have is all the four properties (firstname, lastname, role, coursecount) are same i the object Ak but that get info method is not available here //

// now we gonna see borrowing of method //

// now how that method is working and how am i able to call it so generic because of this key word we not hard coding these value we reffring these values using this and right what this is holding is an object Abinesh but some how if i can point this object not to Abinesh to Ak then everything is gonna work exactly same //

// right now this is pointing towards Abinesh and somehow i want (this) to point not to the Abinesh but to the Ak and since all the rest of the properties are available here this method should work but not for Abinesh but for Ak and this is exactly where (bind) comes in //

// and what bind does actually it binds the object but you can change this binding too //

// Abinesh.getInfo.bind(Ak);  // now thats it now that this reference is not pointing towards Abinesh but Ak when you run only this the result is nothing because bind always gives you areffrence back now there are two ways of running this either the simpler way just add () this //

//Abinesh.getInfo.bind(Ak)(); // incase you dont want to runn like this you can also do this. store the reference and were gonna call this //

let Akinfo = Abinesh.getInfo.bind(Ak);
Akinfo(); // both are like same code //

// always remember one thing bind always gives you a reference back and you have to run that reference //

// ....getinfo.... this is a reference to that method and .....getinfo()...... this is calling that method //

// call <---- this method almost works like a bind but little diffrence here //

Abinesh.getInfo.call(Ak); // now this will gives you a out put not like bind. just remember bind gives you a reference back and you have to manually call that method while on the other hand the call actually directly calls it. there are use case in situation for both of them //

// read more about methods // 
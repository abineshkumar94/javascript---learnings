//  class is almost like a blue print where you define that how things should look like and then we can just use and create objects from them. just like we have been doing a new object an array and whole bunch of other thing  so you simply get started by the keyword class itself and then simply name of it like user, superman, however you want to go with that //

class User{                     // in the function we use the key word function then parenthesis but here just the class keyword and curly braces and thats it. now couple of intresting thing about class the classes alone dosent work we need to create some object from the classes and classes also comes up with the method constructor if you dont create this method inside the class the class automatically creates one //
    constructor(name, email){
        this.name = name;      // this.name is the property of this class user while in the constructor there is a name so that is actually the name which is in after = sign // 
        this.email = email;
        
    
    }
    courselist = [];

    getInfo() {         // and this is bit strange to many beacuse we are not using any keyword function but still this is 100 persent a valid function here this is how you declare your function inside the js // let just say we have a getInfo method here what it does it basically returns us some information so were gonna simply say that hey please return the name and the email //
        
        return { name: this.name, email: this.email };         // we can return an array but were going to return anobject or you can return just individual variable too thats not a big deal. again here name: is an object key, this.name means im referring to something which there in line number 5 //
    
    } // now obviously this is a user class it should have some working method as well like below //

    enrollcourse(name){
        this.courselist.push(name)   // read the line 60 first after came to it // this.#courseList.push(name) //
        
    }
    getcourselist() {
        return this.courselist;
    }  

}

// so this the class but how can use this class now surelyi can come below and i can simply say something like ( let Abinesh = User("Abinesh", "abi1205.ak@gmail.com")  )  surely this is good there is no issue in that //

// but what i really want to do is not like this i want toshow you that how you can actually keep your classes completely seperate and use them later on in some another file //

// the most easy way of doing this is coming at the very bottom of it and then use which is use in below //

module.exports = User;  // surely you can through entire array some of the classes all of the classes maybe some of the methods there is whole lot of variety that can be done but right noe im throwing .0out entire User class //

// once i have exportrd this entire class now you can move on to any file can access all the things that are mentioned inside that file. go to next file to see that there are two syntaxes //

// rewatch the video for more clarification video name classes and module exports in javascript //




//...........................private props getters and setters in javascript........................................//


const rock = new User("rock", "rock@rock.com"); // notice in the above code we do have courselist, and iam creating a method getcourselist and return this.courselist directly so why we are even doing this...//
console.log(rock.getInfo());
rock.enrollcourse("Angular Bootcamp");
console.log(rock.getcourselist());
console.log(rock.courselist);                  // so what is the differents between ( getcourselist) (courselist) so why we are creating extra method    

// when we run this these are exactly same result like ['Angular Bootcamp'] ['Angular Bootcamp'] both are same so why we are doing this. now this bring to the subject called private variable and getters and setters //

// now from the above code (getcourselist) you can simply sayes that is getters becoz there is get prifix to it but its not really the word get makes a getter. getter is a simply a method which helps you to grab some of information from the class which is private (courseList) in this case it not private but the whole idea for having getter is so that not everybody can access all of the objects directly or variables directly  // 

// (enrollCourse) is actually a setter you can say set course list here. not everytime getters and setters is call get and set //

// in the getters we usually return the variable we dont expect any parameters usually not all the time. and in the setters in this case (enrollCourse) we actually expects some parameters becoz we want to set some value which is private to the class //

// (courseList) is not private variable so how can we create private variables here. in core javascript we do like this we put #. now once you put #courseList then you have to reffer this courseList variable throughout your classes with #courseList reffer line 19 and where ever courseList is there put # infront of it to make as private variable //

// now what change it will give to as 49 and 50 are going to see the changes. when we run that we see ['Angular bootcamp'] and undefined so when i access through method then it says (rock.getcourselist()) is able to get that but on the other hand directly (rock.courselist) access that im getting undefined //

// please watch the video // private props getters and setters in javascript //













































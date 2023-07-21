//          switch for role based access in javascript


// create an application with following roles:
// admin - gets full Access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete test
// user - gets access to consume content



// if you have multiple things to checkout switch case is the better way its better way then if&else
// so how do you do that
// so switch actually goes to veraty of cases when you write your key and for every single case we match the value of the case and where ever the value runs we just actually execute that only case thats it 
// break allows through not gonna fall through
const user = "admin";

switch (user) {
    case "admin":
        console.log("you get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
     case "testprep":
        console.log(" gets access to create/delete test");
        break;
    case "user":
        console.log("gets access to consume content");
        break;

    default:
        console.log("trial user");
        break;
}

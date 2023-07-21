// define a function that can answer the role of a user.
//a user can be on following roles:
//admin - with all access
//subadmin - with access to create/delete courses
//testprep - with access to creat/delete tests
//user - consume all content
//other - trial user.

//input: getuserrole(name, role)


function getuserrole(name, role) {     //or const getuserrole = function(name, role) both are common way //
 switch (role) {
    case "admin":
        return `${name} is admin with all access`
        break; // break is not necessary
    case "subadmin":
            return `${name} is subadmin with access to create/delete courses`
        break;  
    case "testprep":
            return `${name} is testprep with access to creat/delete tests`
        break;
    case "user":
            return `${name} is a user consume all content`
        break;
    case "other":
            return `${name} is a trial use`
            break;
    default:
        break;
 }   
}

console.log(getuserrole("abineshkumar", "admin"));
                 //or//
const getrole = getuserrole("abinesh", "user");
console.log(getrole);

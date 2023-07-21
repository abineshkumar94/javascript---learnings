//          objects methods       //

let summa = {
    firstname: "abinesh",
    lastname: "kumar",
    role: "admin",
    logincount: 32,
    facebooksignedin: true,
    courselist: [],  //  its empty lets just say a user logs into the website for example lco asa default he gets a cource list empty that means he is having no course access of now 
    buycourse: function (coursename) {            // if you want to have a method then you simply first and formost call it as simple function then pair of parentheses and then curly braces.....its diffrent then in previous one in previous one we where saying function then like ABC colon and lets just like that but this ABC or whatever name is actully shifted up here thats why we dont write it again here 
        this.courselist.push(coursename);    // so if you want to reffer a variable which is inside the same object that you want to reffer then we use a key word this at that point of time when we were studying it this simply means current context or the current refference of the global object in the case of node it was empty but in the case right now inside the var summa object this simply refer to this summa so whenever you say this. it simply means summa dot so since inside we cannot actually refer and say summa dot because we alredy inside the summa thats why we came uo the key word this and now we can access the course list 
        // so how do we add values we can simply go ahehead and say push and were gonna directly push this course list we can directly push the cource name here   
         
    },    // so we are just gonnainsert this what ever thecourse name it is we gonna insert that inside this array called courselist []
    
    getcoursecount : function () {
        return `${this.firstname} is enrolled in total of ${this.courselist.length} courses`;  //  this method it dosent really need to access or pass on any parameter so we can just go for that but we gonna access few things so we gonna have return key string we gonna use backticks 
    },
};

var courselist = true;
console.log(summa.firstname);
console.log(summa.getcoursecount());
summa.buycourse("react js course");
summa.buycourse("angular js course");
console.log(summa.getcoursecount());





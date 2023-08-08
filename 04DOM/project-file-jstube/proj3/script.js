const courses = [
  {
    name: "complete reactjs course",
    price: "10000"
  },

  {
    name: "complete Angular course",
    price: "25000"
  },

  {
    name: "complete MERN course",
    price: "20000"
  },

  {
    name: "complete DevOps course",
    price: "800000"
  },

];

// next we want to loop through the courses //

generateList = function(){
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "" // its says just reset the value // 

  courses.forEach((course) => {
    
    const li = document.createElement("li")       // as you mark this as createlement it create something like this (<> </>) this is what it creat for you and once you come up and say that i want to create probably a p tag then it inserts exactly the p tag up here like (<p> </p>) this . but in case you say that i want to add a list item its gonna just creat a list item for you so this is what happening behind the scene (<li> </li>) so when we say list item and that will is being generated for me //
    li.classList.add("list-group-item")     //  now the next thing for me is to add a class in that so i need to add aclass like <li> class </> this and inside the class i want to mark list-group-item. so noe in this line of code i reference this list iteam and i can say i want class list ( class is always a list there are a lot of classes that you insert so im gonna say just add the class list and class list has a lot of properties you can definitely say add and many more are there )
    const name = document.createTextNode(course.name)    // this thing is inside the list item reffer in html javascript course to be inserted this is called as textnode so we need to creat textnode from the object name which is in the array and i have to inject it up here. and i can grab the name since i already have the access course whic is looping through every single element so say course.name // 
    li.appendChild(name)    // so we not yet injected we only got reference of it we need to add it now so that is done in this line of code. so go ahead and say that list item i want to append a child onto you. and that child is name // 
    // and next is span  reffer html //
    
    const span = document.createElement("span")
    span.classList.add("float-right")
    const price = document.createTextNode("$ " + course.price)
    span.appendChild(price)

//  now what we want to do is we want to injected span to li and li to ul. //

    li.appendChild(span); // entirety of the span with the pricing inside this list item //
    ul.appendChild(li);  // finally we injected li and span to ul //


  });
};

// generateList()  // in may cases people dont do this they would like that whenever my page actually loads then i want to do it. so we have a window object we have talked about it and window have lot of methods given to you. you can add an event listener in window object too in this case you can just look for the event which is load and then you have to pass on what method should i run (note we dont want to pass the method like generateLIST() like this beacuse we dont want to run it that running part is automaticlly done by a eventlistener we just pass a reference of it like this (generateLIST) //

window.addEventListener("load", generateList);   // so technically both above and below code are same so feel free to go however you like to go no problem in this case //


// so now what we want to do is i want to click on that sort courses. and as soon as i sort courses the courses should be sorted according to their pricing //

// look for the button which is sort-btn //

const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {      // so we gonna use call back in this case //
                        
      courses.sort( (a, b) => a.price - b.price );                                // now what iwant to do is when ever this eventlistener kicks in i want to reference to this array and these array has lot of thing one is sort method. look the documentation for sort method //
//  sort method expects you to have two values just say the a and b which are comparable values and based on the operation it gives you either ascending or desending however you are using.  so now we compar based on pricing so whatever the object that you are giving in we are just comparing based on that //

// now again reason why we call a.price and b.price because as soon as i say courses.sort the sort is go ahead and look for every single object. a is considered as an object so this means name and price in the above array so that entirety of the thing is being compared //  

// so now it definitely sorted but there is nothing on the screen which is re-manipulating or regenerating our list so what i can do since that list is directly impacted by the array i can call this method generatelist directly // 

generateList(); // so now it get sorted but it get repeated two time. so the simple reason is now our html is already have some values so as soon as i click on this generatelist it does all of the tings for me again if regardless of wheather previous value were there or not.. so go to unorder list in top. so there is a lot of html inside the unordered list so go and use innerhtml 

}) 

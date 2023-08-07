document.addEventListener('DOMContentLoaded', () => {
const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");

//  console.log(window.getComputedStyle(red).backgroundColor);

const getbgcolor = (selectedelement) => {
    return window.getComputedStyle(selectedelement).backgroundColor
}

// now i can call this method which is getbgcolor and instead just uh passing up a red here i can pass on probably a pink here and again this is not gona give us any console.log because weare not actually printing out these things we are just getting a return statement so in case you want to have it we have to //

// console.log(getbgcolor(orange));


//.........................events...........................//

// so what is the event when you hit subscribe button that is anevent thats a clickevent //

// there are many event ofwebpage as well for example you input your information in a form write some thing there thats an event but there is no shotage of these events refer MDN docs //

// on ant element you can add this property (addeventlistener) and this add event listener he takes two parameter what event you looking of for whether its a mouseenter, the click event or anything else and you can a callback here so well be taking advantage of this //

// const orangeelememtcolor = getbgcolor(orange); // so whatever the value that is being returned to me im storing that in orangeelementcolor

// orange.addEventListener("click", () => {       //   so notice here we are grabbing the element itself so what i can do is i can take the element and i can add eventlistner onto that once you have specified or you have hunted for the event wheather thats paragraph it can be a button it can be anything it can be a division. you can add event listener on that now two properties that are given to the eventlistener the first one is what event you are listening for and second what you really want to do so for example most of the time youll be saying click but we just saw that we have this mouse enter event as well //

// center.style.background = orangeelememtcolor;                       // ok what you want to do whwn this orange whwn your mouse actually moves on this orange element ok what i want to do is i want to look for this center element which we have already hunted down. now style and getcomputestyle are two diffrent things style is what you use when you want to implement some of the style when youwant to grab the style then the best way is get computed style. surely youcan grabe styles from this way as well (style) but the most recommended ways get computed style because it gives you the final result applied by browser and all these things so depends on use case scenario you some times grabe the styling through style as well //

// so what its do is when mouse goes to this orange the event is gonna fire based on when my mouse event actually goes then were gonna go on to the center element which we have grabbed through the query selector it will add a property to this on its background color the what or the color we graph from it //

});

// now what i want to do is this entirety of thing that we able to do lets actually wrapthat up inside a method //

const magiccolorchanger = (Element, color) => {
  return Element.addEventListener("mouseenter", () => {                                     // so what are the couple of things that we require up here. center, what color it should go up so that should also is needed and apart from this we need the color to be passed on as well but again there is no requirement actually to pass on this center because this is a common thing every single time so we are gonna just refer to this center globallyinside this method so lets just skip that part.   we need a element on color element is a just name //
    center.style.background = color;
  });
}

magiccolorchanger(red,  getbgcolor(red));
magiccolorchanger(cyan,  getbgcolor(cyan));
magiccolorchanger(violet,  getbgcolor(violet));
magiccolorchanger(orange,  getbgcolor(orange));
magiccolorchanger(pink,  getbgcolor(pink));


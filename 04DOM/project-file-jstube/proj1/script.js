document.addEventListener('DOMContentLoaded', () => {
let numbers = document.querySelector(".counter");
let followers = document.querySelector(".Followers");

let count = 1;

setInterval(() => {
    if (count < 1000);{
    count++;
    numbers.innerHTML = count;
    }
    }, 1);

    setTimeout(() => {
        followers.innerHTML = "followers in linkedin";
    }, 3000);
});



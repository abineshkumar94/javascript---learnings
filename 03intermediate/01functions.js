// so function is the block of code which is seperated out so that we reuse again and again //


function sayhello(name) {
    console.log("hello there, Abieshkumar");
    console.log(`hello there, ${name}. how are you`);
}

sayhello("Abineshkumar");
sayhello("KUMAR");

function vanakam() {
    return "hello in india";
}

var greetings = vanakam();
console.log(greetings);
console.log(vanakam());
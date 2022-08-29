"use strict";

let num = 20;

function showFirstMessege(text) {
    console.log(text);
    num = 10;
}

showFirstMessege("hi, shit");
console.log(num);

// function calc(a, b) {
//     return(a + b);
// }

// console.log(calc(10, 5));
// console.log(calc(23545, 341));
// console.log(calc(1, 2));

const logger = function() {
    console.log("hi");
};

logger();

const calc = (a, b) => {
    return (a + b);
};
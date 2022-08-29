"use strict";


// while (num <= 55) {
//     console.log(num);
//     num++;
// };


// do {
//     console.log(num);
//     num++;
// }
// while(num <= 55);


// let num = 50;
// for (let i = 1; i < 10; i++) {
//     if (i == 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

let result = '';
const length12 = 7;

for (let i = 0; i < length12; i++) {
    for (let j = 0; j < i; j++){
        result += '*';
    }
    result += '\n';
}

console.log(result);
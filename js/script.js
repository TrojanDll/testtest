const arr = ["sfdg", 12, true, "chmo", {}, []];
const obj = {
    a: 'a', 
    b: 'b',
    c: 'c'
}

obj.d = 'dfghdfh';
obj['e'] = 'abibaa';
console.log(obj['d']);
console.log(obj['e']);

console.log(arr[3]);
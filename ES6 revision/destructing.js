// Destructing
let arr = [1 , 5, 8];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

// better way
let [a, b, c] = arr;
console.log(a, b, c);

let [x, y] = arr;
console.log(x, y);

let [p, , r] = arr;
console.log(p,r);
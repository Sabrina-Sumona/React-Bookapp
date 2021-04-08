// Spread Operator splits

// Spread Operator for array
/*let numbers= [1 ,2 ,5, 7];
console.log(numbers);
console.log(...numbers);
let numbers2 = [7, 8, 9];
let arr = [ numbers, numbers2, 6, 7, 10];
console.log(arr);
arr = [ ...numbers, ...numbers2, 6, 7, 10];
console.log(arr);*/

// Spread Operator for object
let person = {
  name : "x",
  age : 45
}
let another = { person, nationality: "Bangladeshi"} 
console.log(another);
another = { ...person, nationality: "Bangladeshi"} 
console.log(another);

// Rest Operator joins
let numbers= [1 ,2 ,5, 7];

let something = (numArr) => console.log(numArr);

//only one parameter passed
something(numbers,6,7);
something(1, 3, 5, 8);

something = (...numArr) => console.log(numArr);

//all parameters passed
something(numbers,6,7);
something(1, 3, 5, 8);
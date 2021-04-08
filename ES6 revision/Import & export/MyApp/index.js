// import {str} from './component.js'
// console.log(str);

// import {a, str, arr, obj, hello, Person} from './component.js'
// console.log(str);
// console.log(a);
// console.log(arr);
// console.log(obj);
// hello();
// let p = new Person();
// console.log(p);

// from one file only one default export can be done
//default export do not need {...} to import
import myApp from './other.js'
let newApp = new myApp("Sabrina");
newApp.printSomething();

//must import as the original name
//but if default we can set any name
//if we want to set name except default we can rename it using 'as'
import  array, {a, str, obj as newobj, hello, Person} from './component.js'
console.log(str);
console.log(a);
console.log(array);
console.log(newobj);
hello();
let p = new Person();
console.log(p);

//import all and rename it 'as' 'all'
import * as all from './component.js'
// here 'all' is a onject
console.log(all);
console.log(all.a);
console.log(all.str);
all.hello();
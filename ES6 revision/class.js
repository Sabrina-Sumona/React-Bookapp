// Classes - Blueprint to create objects

//static class
/*class Vehicle {
  constructor() {
    this.color = "Red";
  }
}
let obj1 = new Vehicle();
let obj2 = new Vehicle();
console.log(obj1, obj2);*/

//dynamic class
/*class Vehicle {
  constructor(param) {
    this.color = param;
  }
}
let obj1 = new Vehicle("red");
let obj2 = new Vehicle("yellow");
console.log(obj1, obj2);*/

//different parameters
/*class Vehicle {
  constructor(param1, param2) {
    this.color = param1;
    this.passenger = param2;
  }
}
let obj1 = new Vehicle("red",100);
let obj2 = new Vehicle("yellow",200);
console.log(obj1, obj2);*/

//method
/*class Vehicle {
  constructor(param1, param2) {
    this.color = param1;
    this.passenger = param2;
  }
  saySomething() {
    console.log("Hello world");
  }
  printColor() {
    console.log(this.color);
  }
}
let obj1 = new Vehicle("red",100);
let obj2 = new Vehicle("yellow",200);
console.log(obj1, obj2);
obj1.saySomething();
obj1.printColor();
obj2.printColor();*/

//properties outside of constructor
/*class Vehicle {
  myvar = "welcome";
  constructor(param1, param2) {
    this.color = param1;
    this.passenger = param2;
  }
  saySomething() {
    console.log("Hello world");
  }
  printColor() {
    console.log(this.color);
  }
}
let obj1 = new Vehicle("red",100);
let obj2 = new Vehicle("yellow",200);
console.log(obj1, obj2);
obj1.saySomething();
obj1.printColor();
obj2.printColor();*/

// Inheritance

//super class
class Vehicle {
  //super constructor
  constructor(param1, param2) {
    this.color = param1;
    this.passenger = param2;
  }
  saySomething() {
    console.log(this.color);
  }
}

// sub class or derived Class
class Car extends Vehicle {
  constructor(numWheel, pass, color) {
    //copy of super constructor
    super(color, pass);
    this.wheel = numWheel;
  }
}

let obj1 = new Car(4, 6, "Yellow");
console.log(obj1);
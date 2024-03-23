const readLineSync = require("readline-sync");
// object properties
// -objects properties are in key value pair
//every should be in string if it is not then javascript engine implicitly convert it into string
//

// operations
// access property using [] and '.' notation which one to use when ?
//what is computed propertys

// what all things learned
// how to create object
// how write properties inside objects
// how to access properties of objects
// which accesing way to use and when . or []
//what is computed propertiesṇ

const ob = {
  name: "shubham",
  address: "lorem ipsum lorem ipsum",
  "city pincode": 400086,
};

console.log(ob.name);
console.log(ob["city pincode"]);
// ----------------------------------------------------------------------------------------------

// function as a property
// points
// -we cannot use arrow function as a property
// -borrowing a function-Method borrowing, also known as function borrowing, is, as its name implies, a way for an object to use the methods of another object without redefining that same method

// what all things we learned
// how to pass function as properties in object
// why function is needed in objects
const ob2 = {
  name: "shubham",
  greatMessage() {
    console.log(`hello ${this.name}, welcome`);
  },
};
console.log(ob2);
ob2.greatMessage();

// ----------------------------------------------------------------------------------------------

// computed Properties

var key = readLineSync.question("enter the key to retrieve the info ?");
var course = readLineSync.question("enter the name of the course ");

const ob3 = {
  name: "shubham",
  greatMessage() {
    console.log(`hello ${this.name}, welcome`);
  },
  address: "anything ,lorem ,ipsum",
  by() {
    console.log("by  by  by  by by  by  by by  y  y ");
  },
  [course]: "course not available",
};

console.log(ob3[key]);
console.log(ob3);
console.log(ob3[course]);

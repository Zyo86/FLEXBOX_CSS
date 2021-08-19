// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// let multiply = function(x,y){
//   console.log("x : " + x)
//   console.log("y : " + y)
//   return x*y;
//   }

//   let multiplyByTwo = multiply.bind(this, 2);

//   let multiplyByThree = multiply.bind(this, 2, 3, 5);

//   let multiplyByNone = multiply.bind(this, );

//   console.log(multiplyByTwo(5))
//   console.log(multiplyByThree(6))
//   console.log(multiplyByNone(2,6))

// let mul = function(a){
//   return function(b){
//   console.log(a*b)
//   }
//   }

//   let mulByTwo = mul(2);
//   console.log(mulByTwo);

//   mulByTwo(3);

// let name = {
//   first: "Jyotiman",
//   lastname: "Lahkar",
//   printFullName: function(hometown){
//   console.log(this.first + ' ' + this.lastname + " from " + hometown)
//   }
//   }

//   name.printFullName("Guwahati")

//   let sachin = {
//   first: "Sachin",
//   lastname: "Tendulkar",
//   }

//   let virat = {
//   first: "Virat",
//   lastname: "Kohli",
//   }

//   //Function Borrowing
//   name.printFullName.call(sachin, "Mumbai")
//   name.printFullName.apply(virat, ["Delhi"])

//   //bind
//   let printMyName = name.printFullName.bind(virat, "Delhi")
//   printMyName();

//Polyfill for bind
// let name = {
//   first: "Jyotiman",
//   last : "Lahkar"
//   }
//   let printName = function(hometown, state){
//   console.log(this.first + ' ' + this.last + " from " + hometown + " from state: " + state)
//   }

//   //Every function in javascript should have access to this myBind function

//   let printNameDefaultBind = printName.bind(name, "Guwahati");
//   printNameDefaultBind("Assam");

//   Function.prototype.myBind = function(...args){
//   //here, this refers to printName method
//     let obj = this;
//     let params = args.slice(1);
//     return function(...args2){
//       obj.apply(args[0], [...params, ...args2])
//     }
//   }

//   let myBindImpl = printName.myBind(name, "Guwahati");
//   myBindImpl("Assam");

"use strict";
// treat all code as newer javascript

// alert(3+3); in node js this will not work

// number
// string " " , ' '
// boolean true or false
// null and its type is object it is a standalone value
// undefined => 
// symbol => for unique


// object

console.log(typeof(null));  // object


// datatype conversions
let score = null
// console.log(typeof(score))

let value = Number(score)
// console.log("Type",typeof(value),"Value is",value)
// converted to number but value is NaN(not a number)

// "233" => number
// "22eff"=>type = number but value is NaN

let isLoggedIn = 1

let boolLoggedIn = Boolean(isLoggedIn);
// console.log(boolLoggedIn)

// 1=>true / 0=>false
// "" => false
// "abckd" => true

// OPERATIONS
let posNum = 2;
let negNum = -posNum
// console.log(negNum);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true 
// comparisons convert the null into the number but the equality does not

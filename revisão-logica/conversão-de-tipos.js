let n1 = 10;
let n2 = "20";
console.log(typeof n1, typeof n2);
console.log(n1 * n2);
console.log(n1 + n2); // + concatena entao zoa o js

// operações de conversão parseFloat(), parseInt(), Number

let numString = "10.9999";
let num1 = parseFloat(numString);
console.log(typeof num1);
console.log(typeof numString);

let num2 = "14";
num2 = Number(num2);
console.log(num2);

// toString();
let num3 = 10
num3 = num3.toString();
console.log(num3, typeof num3);


var readlineSync = require('readline-sync') 

function add(num1, num2) {
    return num1+num2 
}
function sub(num1, num2) {
    return num1-num2 
}
function mult(num1, num2) {
    return num1*num2 
}
function div(num1, num2) {
    return num1/num2 
}

let num1 = readlineSync.question('please enter first number: ');
let num2 = readlineSync.question('please enter second number: ');

var num1int = parseFloat(num1) 
var num2int = parseFloat(num2) 

let opratins = ["add","sub","mult","div"];
let index = readlineSync.keyInSelect(opratins, "chose an opraton");

// console.log(num1)
// console.log(num2)
// console.log(opratins[index]);

if (opratins[index] === "add") {
    var rusilt = add(num1int,num2int)

} else if (opratins[index] === "sub"){
    var rusilt = sub(num1int,num2int)
}
 else if (opratins[index] === "mult"){
    var rusilt = mult(num1int,num2int)
}
 else if (opratins[index] === "div"){
    var rusilt = mult(num1int,num2int)
}
console.log(rusilt)
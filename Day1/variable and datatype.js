
//Activity 1: Variable Declaration
var num = 10;
console.log(num);

let str = "Hello";
console.log(str);

//Activity 2: constant Declaration
const isTrueFlag = true;
console.log(isTrueFlag);

//Activity 3: Data Types
let numb = 10;
let inputStr = "Hellow";
let flag = false;
let obj = {"name":"payal"};
let arr = [1,3];

console.log(typeof numb);
console.log(typeof inputStr);
console.log(typeof flag);
console.log(typeof obj);
console.log(typeof arr);

//Activity 4: Reassigning variables
let reAssignLet = 10;
console.log(reAssignLet);
reAssignLet = "string val";
console.log(reAssignLet);

//Activity 5: Reassigning const
const reAssignConst = 10;
console.log(reAssignConst);
//reAssignConst = 12;
//console.log(reAssignConst); // Error TypeError: Assignment to constant variable. at Object.<anonymous> 


//Feature Request
//1. Variable Types console log: write a script that declares valiable of diff data types and log both value and data type of each variable to console.

function typeofvariable(input){
     console.log("Type of variable is ",typeof(input));
     console.log("Value of variable is",input);
 }

typeofvariable("hello");
typeofvariable(2);

//2. Reassignment Demo: Create a script that demonstrates the difference in bahaviour between let and const when it come to Assignment

let y = 2 ; 
console.log("Value of x before reassigning -->",y);
y = 5 ; 
console.log("Value of x after reassigning -->",y);


const z = true; 

try{
    z = false;
}catch(e){
    console.log(e);
}



















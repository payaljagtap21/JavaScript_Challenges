
//Activity 1: Arithmatic Operator
//Task1: write a program to add two Number and log the result to the console
//let num = prompt("Enter num1:");
//let num2 = prompt("Enter num2:");
//let action = prompt("Choose action(sum / sub/ mul/ div/ mod )");
//Task2: write a program to subtract two Number and log the result to the console
//Task3: write a program to multiply two Number and log the result to the console
//Task4: write a program to divide two Number and log the result to the console
//Task5: write a program to find the remainder when one number is divided by another and log the result to the console
//Activity 2 : Assignment operator
//Task 6: use of +=
//Task 7: use of -=
//Activity 3: comparison operator
//Task 8:  > and <
//Task 9: >= and <=
//Task 10: == and ===
//Activity 4: Logical Operator
//Task 11: &&
//Task 12: ||
//Activity 5 : Ternary Operator
//Task 13: ?
//Feature Request:
//1. Arithmatic Operator script
//2. Comparision and Logical operator script
//3. Ternary Operator script
//Achievement
//1. Understand and used arithmatic operator for basic calculations
//2. Use assignment operator to modify variable value
//3. Compare value using comparision Operator
//4. combine conditions using logical Operators
//5. Use ternary operator for concise conditional expression



console.log("Activity 1: Arithmatic operator\n");

let num1 = 40;
let num2 = 20;

console.log(`Addition of ${num1} and ${num2} is ${num1 + num2}`);
console.log(`Addition of ${num1} and ${num2} is ${num1 - num2}`);
console.log(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`);
console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`);
console.log(`Remainder of ${num1} and ${num2} is ${num1 % num2} \n`);


console.log("Activity 2: Assignment operator\n");
console.log("a = 10 and b = 20");
let a = 10;
a += 20;
console.log("a += 20 : \n"+ a);


let b = 20;
b -= 10;
console.log("b -= 10: \n"+ b);


console.log("Activity 3: comparison operator \n");

console.log(`a > b : ${a > b}`);
console.log(`a < b : ${a < b}`);


console.log(" ");
console.log(`a >= b : ${a >= b}`);
console.log(`a <= b : ${a <= b}`);


console.log(" ");
console.log(`a == b : ${a == b}`);
console.log(`a === b : ${a === b}`);
console.log(`a != b : ${a != b}`);

let in1 = "10";
let in2 = 10;
console.log(`in1 == in2 : ${in1 == in2}`);
console.log(`in1 === in2 : ${in1 === in2}\n`);

console.log("Activity 4: Logical Operator\n");

console.log(`a > b : ${a > b}`);
console.log(`a == b : ${a == b}`);
console.log(`a>b && a==b : ${a>b && a==b}`);
console.log(`in1 == in1 : ${in1 == in1}`);
console.log(`a>b && a==b : ${a>b && a==b} \n`);

console.log(`a > b : ${a > b}`);
console.log(`a == b : ${a == b}`);
console.log(`a>b || a==b : ${a>b || a==b}`);
console.log(`in1 == in1 : ${in1 == in1}`);
console.log(`a>b || a==b : ${a>b || a==b}\n`);

console.log("Activity 5: Ternary operator \n");
console.log(`b > 0 ? 'positive' : 'negative' => ${b > 0? 'positive' : 'negative'} \n`);


console.log("Feature Request \n");

console.log("1. Arithmatic Operator script");

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

console.log("Addition = "+ add(num1, num2));
console.log("Subtraction = "+ sub(num1, num2));
console.log("Multiplication = "+ mul(num1, num2));
console.log("Divition = "+ div(num1, num2));
console.log("Remainder = "+ mod(num1, num2)+" \n");

console.log("Approach 2:");
function op(num1, num2, action){
	let res;
	switch(action){
	case "sum": 
	   res =  num1 + num2;
	   break;
	case "sub": 
	   res = num1 - num2;
	   break;
	case "mul": 
	   res = num1 * num2;
	   break;
	case "div": 
	   res = num1 / num2;
	   break;
	case "mod": 
	   res = num1 % num2;
	   break;       
	default : 
	   console.log("No Action");
    }
	return res;
}

console.log("Addition = "+ op(num1, num2, "sum"));
console.log("Subtraction = "+ op(num1, num2, "sub"));
console.log("Multiplication = "+ op(num1, num2, "mul"));
console.log("Divition = "+ op(num1, num2, "div"));
console.log("Remainder = "+ op(num1, num2, "mod")+" \n");


// Comprassion operator

const lessThan = (a, b) => a < b;
const graterThan = (a, b) => a > b;
const lessThaneq = (a, b) => a <= b;
const graterThaneq = (a, b) => a >= b;
const notEq = (a, b) => a != b;
const eqlTo = (a, b) => a == b;
const eqlToType = (a, b) => a === b;
const notEqType = (a, b) => a !== b;
const andOp = (a, b) => a && b;
const orOp = (a, b) => a || b;
const ternaryOp = (a, b) => (a < b) ? true : false;

console.log("num1 < num2 : "+lessThan(num1, num2));
console.log("num1 > num2 : "+graterThan(num1, num2));
console.log("num1 <= num2 : "+lessThaneq(num1, num2));
console.log("num1 >= num2 : "+graterThaneq(num1, num2));
console.log("num1 == num2 : "+eqlTo(num1, num2));
console.log("num1 != num2 : "+notEq(num1, num2));
console.log("num1 === num2 : "+eqlToType(num1, num2));
console.log("num1 !== num2 : "+notEqType(num1, num2));
console.log("num1 && num2 : "+andOp(num1, num2));
console.log("num1 || num2 : "+orOp(num1, num2));
console.log("num1 ? num2 : "+ternaryOp(num1, num2));




// Day 3: Control Structures
//Activity 1 : If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let a = 10;
let b = -10;

const checkNum = (a) => {
   if(a > 0) return  "positive";
   else if(a < 0) return "Negative";
   else return 0;
};

console.log(`Number {a} is ${checkNum(a)}`);
console.log(`Number {b} is ${checkNum(b)}`);
console.log(`Number {0} is ${checkNum(0)} \n`);

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const isEligibleToVode = (age) => {
	if(age >= 18) 
		return true;
	else 
		return false;
};

console.log(`person is ${isEligibleToVode(17) === true? 'Eligible' : 'Not Eligible'} \n`);

//Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
a = 5, b = 1;
let c = 20;

const findLargetAmongThree = (a, b, c) => {
	let largest = c;
	if(a > b){
		if(a > c){
			largest = a;
		} 
	} else if(b > a) {
		if( b > c){
			largest = b;
		} 
	} else{
		largest = c;
	}
	return largest;
};



console.log(`Larget among ${a},${b} and ${c}  is ${findLargetAmongThree(a, b, c)} \n`);

//Activity 3 : Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

const dayOfWeek = (day) => {
	let dayOfWeek;
	switch(day){
		case 1:
		   dayOfWeek = "Monday";
		   break;
		case 2:
		   dayOfWeek = "Tuesday";
		   break;
		case 3:
		   dayOfWeek = "Wednesday";
		   break;
		case 4:
		   dayOfWeek = "Thursday";
		   break;
		case 5:
		   dayOfWeek = "Friday";
		   break;
		case 6:
		   dayOfWeek = "Saturday";
		   break;
		default:
		   dayOfWeek ="Sunday";
	};
	return dayOfWeek;
}

console.log(`Day is ${dayOfWeek(1)}`);
console.log(`Day is ${dayOfWeek(2)}`);
console.log(`Day is ${dayOfWeek(3)}`);
console.log(`Day is ${dayOfWeek(4)}`);
console.log(`Day is ${dayOfWeek(5)}`);
console.log(`Day is ${dayOfWeek(6)}`);
console.log(`Day is ${dayOfWeek(7)}\n`);

const findGrade = (marks) => {
	let grade;
	switch(true){
		case (marks > 90):
		   grade = 'A';
		   break;
		case (marks >= 80 && marks < 90):
		   grade = 'B';
		   break;
		case (marks >= 60 && marks < 80):
		   grade = 'C';
		   break;
		case (marks >= 45 && marks < 60):
		   grade = 'D';
		   break;
		case (marks >= 35 && marks < 45):
		   grade = 'E';
		   break;
		default:
		   grade = 'F';
	};
	return grade;
};

console.log(`Grade : ${ findGrade(99)}`);
console.log(`Grade : ${ findGrade(85)}`);
console.log(`Grade : ${ findGrade(78)}`);
console.log(`Grade : ${ findGrade(50)}`);
console.log(`Grade : ${ findGrade(40)}`);
console.log(`Grade : ${ findGrade(30)} \n`);


//Activity 4
let num = 41;

const checkEvOd = ((num) => (num % 2 == 0 ? 'Even': 'Odd'));

console.log(`Number is ${checkEvOd(num)}`);


//Activity 5

let year = 2023;

const isleap = ((year) => {
	if(year % 4 == 0 ){
		if(year % 100 == 0){
			if(year % 400 == 0 ){
				return true;
			} else{
				return false;
			}
		} else {
			return true;
		}
	} else{
		return false
	}
});

console.log(`${year} Is ${isleap(year) ? 'Leap Year' : 'Not Leap Year'}`);


//Feature request:
//1.Number Check (pos, neg, zero)
//2.Volting Eligibility scripts
//3.Day of the week script
//4.Grade Assignment script
//5.Leap year check script

//Achievement	
//Implement and understand basic if else flow
//used nested if else statement to handle multiple conditions
//utilized switch case for control flow based on specific value
//Apply ternary operator for concise condition checking
//combine multiple condition to solve more complex problems.




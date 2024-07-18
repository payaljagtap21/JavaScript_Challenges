//Day 5 : Functions

//Activity 1
//Task 1
function checEvOd(num){
	if(num % 2 == 0){
		return true;
	} else {
		return false;
	}
}

console.log(`Number is ${checEvOd(8) == true ? 'Even' : 'Odd' }`);
console.log(`Number is ${checEvOd(9) == true ? 'Even' : 'Odd' }`);

//Task 2
function square(num){
	return num * num;
};

console.log(`Square of 4 is ${square(4)}`);
console.log(`Square of 5 is ${square(5)}`);

//Activity 2
//Task 3
let maximum = (a, b) => (a > b)? a: b;

console.log(`Large number from 40 and 7 is ${maximum(40, 7)}`);

//Task 4
let concat = (a, b) => a + b;

console.log(concat("Hello"," Word"));

//Activity 3
//Task 5
let sum = (a, b) => {
	return a + b;
};
console.log(`Sum of 40 and 7 is ${sum(40, 7)}`);

//Task 6
let contains = (str, ch) => {
	for(let i = 0; i< str.length; i++){
		if(str.charAt(i) == ch){
			return true;
		}
	}
	return false;
};

console.log(`String "hello Word" contains o : ${contains("hello Word", "o")}`);
console.log(`String "hello Word" contains x : ${contains("hello Word", "x")}`);


//Activity 4
//Task 7
let f1 = (a, b) => {
	b = 5;
	return a * b;
}
console.log(f1(2));

//Task 8
let wish = (name, age ) =>{
	age = 18;
	return "Happy Birthday "+ name+" you are now "+age;
};
console.log(wish("payal"));

//Activity 5
//Task 9

function sayhello() {
  console.log("hello");
}

function manytime(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}
manytime(sayhello, 5);

//Task 10

function add10Percent(a, b) {
  return a + 10;
}
function square(a) {
  return a * a;
}

function hof(func1, func2, a){
	return func1(func2(a));
}

console.log(hof(square, add10Percent, 10));

//Feature Request
//1. Even odd function scripts
//2. Square calculation function scripts
//3. Concatination function scripts
//4. Scrum calculation arrow function script
//5. High order function script
 
//Achievement
//Understand and define the function using function declaration, expression and arrow function.
//Use function parameter and default parameter effectively







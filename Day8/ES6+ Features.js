//Day 8
//Activity 1: Template Literals
//Task 1:
let pname = "payal";
let page = 30;

console.log(`My name is ${pname} and age is ${page} \n`);

//Task 2:

let address = `My adress is : 57, 
Bute street
My adress is : 57, 
Bute street`;

console.log(address);

//Activity 2: Destructuring
//Task 3:
let [a1, a2, a3, a4, a5] = "payal";

console.log(`${a1} ${a2} ${a3} ${a4} ${a5}`);

let book = {
	name : 'book1',
	age : 30
}

//Task 4:

const {name, age} = book;

console.log(`${name}  ${age}`);
	
//Activity 3:
//Task 5:
function spreadOperator(...arr){
	arr[0].push('r');
	let newArr = arr;
	console.log(newArr[0]);
}
let arr = ['a', 'b', 'c'];
	
spreadOperator(arr);

//Task 6:
let sum  = 0;
function restfn(a, ...arr){
	sum = a;
	for (let i of arr) {
        sum += i;
    }
	return sum;
}

console.log(restfn(2, 3, 1));


//Activity 4:
//Task 7:
function multiply(a, b = 1){
	return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 2));

//Activity 5:


//Task 8:
function person(pname, page){
	let obj = {
	   name : pname,
	   age : page	
    }
	return obj;
}

let newObj = person('payal', 30);
console.log(newObj);
newObj = person('payal2', 60);
console.log(newObj);
console.log();

//Task 9:
function Car(cname, model, type){
	this.cname = cname;
	this.model = model;
	this.type = type;
}
	
let kiaEV6 = new Car('kiaEV6', 'MD01', 'Hybrid');
console.log(kiaEV6);
console.log("Car Name : "+ kiaEV6.cname);
console.log("Car Model : "+ kiaEV6.model);
console.log("Car Type : "+ kiaEV6.type);
console.log();

let tesla = new Car('Tesla', 'MD02', 'Electric');
console.log(tesla);
console.log("Car Name : "+ tesla.cname);
console.log("Car Model : "+ tesla.model);
console.log("Car Type : "+ tesla.type);

//Feature Request
//1. Template Literals script
//2. Destructuring script
//3. Spread and Rest Operators script
//4. Default Parameter script
//5. Enhanced Object Literals script


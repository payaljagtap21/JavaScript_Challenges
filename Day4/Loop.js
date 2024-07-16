//Day 4 :Loop


//Activity1 : for loop

let printWithfor = (n) => {
	for(let i = 1; i <= n; i++){
	    console.log(i + " ");
    }
}
console.log(`\n Number from 1 to 10 :`);
printWithfor(10);


let printTableOfN = (n) => {
	for(let i = 1; i <= 10; i++){
	    console.log(`${n} * ${i} = ${n * i} `);
    }
}
console.log(`\n Table of 5 :`);
printTableOfN(5)
console.log(`\n Table of 2 :`);
printTableOfN(2)


//Activity2 : While loop
let sumOfN = (n) => {
	let totalSum = 0;
	while(n > 0){
		totalSum += n;
		n--;
    }
	return totalSum;
};
console.log(`\n Sum of 1 - 5 is ${sumOfN(5)}`);



let printWithWhile = (n) => {
	while(n > 0){
		console.log(n--);
	}
};
console.log(`\n Numbers from 10 - 1`);
printWithWhile(10);
console.log(`\n Numbers from 5 - 1`);
printWithWhile(5);

//Activity3: Do... While loop

let printWithDoWhile = (n) => {
	let i = 1;
	do{
	   console.log(i++);
	   n--;
    } while(n > 0);
}

console.log(`\n Numbers from 1 - 5`);
printWithDoWhile(5);
console.log(`Numbers from 1 - 10`);
printWithDoWhile(10);

let factorialof = 5;

let factorial =((factorialof) => {
	let fact  = 1;
	do{
		fact = fact * factorialof;
		factorialof--;
	}while(factorialof > 0);
    return fact;
});

console.log(`\n factorial of ${factorialof} is ${factorial(factorialof)} \n`);

//Activity4: Nested loop

//Pattern 
/*

*
* *
* * * 
* * * *
* * * * *

*/

let printPatternForN = (n) =>{
	
	for(let i = 0; i < n; i++){
		let str = "";
		for(let j = 0; j < i + 1; j++){
		     str = str + "* ";
	    }
		console.log(str);
	}
};

printPatternForN(5);
printPatternForN(6);
printPatternForN(8);
printPatternForN(10);

//Activity5: Loop control Statements

let printNSkipP = (n , p) => {
	for(let i = 1; i <= n; i++){
		 if(i == p) {
			 continue;
		 }
		 console.log(i);
	}
};
printNSkipP(10, 5);
console.log();

let printNbreakAtB = (n , b) => {
	for(let i = 1; i <= n; i++){
		 if(i == b) {
			 break;
		 }
		 console.log(i);
	}
};
printNbreakAtB(10, 7);

//Feature requests:
//1. Number printing scripts
//2. MultiplicationTable script
//3. Pattern printing script
//4. Sum Calculation script
//5. Factorial Calculation script

//Achievement
//Understand and use for loop to iterate over a sequence of Numbers
//utilize while loop for iteration based on condition
//Apply do .. while loop to ensure the loop body is excuted at least once
//implemented nested loop to solve more complex problem
//use loop control Statements (break and continue) to control the flow of loops


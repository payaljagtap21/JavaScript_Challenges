//Day 6 : Arrays
//Activity 1

let arr = [];

console.log("Number from 1 - 5");

let createArray = n => {
	for(let i = 1; i <= n; i++){
		arr.push(i);
	}
};

createArray(5);

printArray(arr);

console.log("first elemet is = "+arr[0]+" and last element is = "+arr[arr.length - 1]);

function printArray(arr){
	for(let i = 0; i < arr.length; i++){
	    console.log(arr[i]+" ");
    }
}

//Activity 2
console.log("Add last element");
let addNew = ele => {
	arr.push(ele);
};
addNew(6);
printArray(arr);

console.log("Remove last element");
let removeEle = () => {
	arr.pop(arr.length - 1);
};
removeEle();
printArray(arr);

console.log("shift left");
let shiftLeft = () =>{
	for(let i = 1; i < arr.length; i++){
	    arr[i-1] =arr[i];
    }
	arr.pop(arr.length - 1);
};
shiftLeft();
printArray(arr);

console.log("shift right");
let shiftRight = (ele) =>{
	arr.pop(arr.length - 1);
	for(let i = arr.length; i > 0; i--){
	    arr[i] =arr[i - 1];
    }
	arr[0] = ele;
};
shiftRight(1);
printArray(arr);

//Activity 3
//map
console.log("use of map");

let doubleArr = (arr, n) => (
    arr.map((ele) => 
	ele * n
));
let newArr = doubleArr(arr, 2);
printArray(newArr);

//filter
console.log("use of filter");
let AfterfilterEle = ((ele) => newArr.filter((ele) => 
	ele > 4
));
AfterfilterEleArr = AfterfilterEle();
printArray(AfterfilterEleArr);

//reduce
console.log("use of reduce");

let total = ((newArr) => newArr.reduce((ele, sum) => {
   sum += ele;   
   return sum;
}, 0));

console.log("sum  = "+total(newArr));
//Activity 4

for(let i = 0; i < arr.length; i++){
	    console.log(arr[i]+" ");
}
	
arr.forEach(ele => console.log(ele));

//Activity 5

const rows = 3;
const cols = 4;
let i = 1;

const array2d = Array.from({length : rows}, () => Array.from({length : cols}, () => i++));

console.log(array2d);

let q = 1;

const matrix = [];
for(let j = 0; j < rows; j++){
	let arr1 = [];
	for(let k = 0; k < cols; k++){
	    arr1.push(q++);
    }
	matrix[j] = arr1;
}
console.log(...matrix);

for(let k = 0; k < matrix.length; k++){
	for(let l = 0; l < matrix[0].length; l++){
	    console.log(matrix[k][l]);
    }
}

//Feature Request
//1. Array Manipulation script
//2. Array Transformation script
//3. Array Iteration script
//4. Two dimention array script

//Achievement:
//create and manipulate array using various method
//transform agreegation array data using map, filter and reduce
//Iterate over array using loops and iteration methods
//Understand and work with multidimetional array
//Day 7 : Objects

//Activity 1:

let book = {
	title : 'JavaScript',
	author: 'payal',
	year: '2024'
}
console.log(book);

console.log("Book title is: " + book.title);
console.log("Book author is: " + book.author);

//Activity 2:

let bookTitle = () => 'JS';

book = {
	title : bookTitle(),
	author: 'payal',
	year: '2024'
}

//book.title = bookTitle();

console.log(bookTitle());
console.log(book);


let bookYr = (year) => year;

book = {
	title : bookTitle(),
	author: 'payal',
	year: bookYr(2015)
}

//book.year = bookYr(2015);
console.log(book);

//Activity 3:

let library = {
	name : 'ABC',
	books : [
	{title : 'book1', author: 'payal', 	year: '2021'},
	{title : 'book2', author: 'payal1', year: '2023'},
	{title : 'book3', author: 'payal2', year: '2021'},
	{title : 'book4', author: 'payal', 	year: '2015'}
	]
}
console.log(library);

console.log("Library Name: "+library.name);

console.log("Books Available in library : ");

library.books.forEach((book) =>{
     console.log(book.title);
});
	
//Activity 4:
	
function getTitle() { return this.title }
function getyr() { return this.year}

book = {
	title : 'BOOK 1', 
	author: 'Author 1', 	
	year: '2012',
	field1 : function (){ return `${this.title} by ${this.year}`}
	};
	
console.log(book.field1());

for(b in library.books){
	console.log(library.books[b]);
}

//Activity 5:

const keys = Object.keys(library);

console.log(keys)

const values = Object.values(library);

console.log(values)


//Feature Request
//1.Book object script
let  i = 0;
let getTitleVal = () => "book" + i;
let getAuthorVal = () => "Payal" + i;
let getYearVal = () =>  "201" + i;

let getbook = () => ( {title : getTitleVal(), author : getAuthorVal(), year: getYearVal() } )

console.log(getbook());
i++;
console.log(getbook());
i++;
console.log(getbook());

//2.Library object script
//3.Object Iteration script


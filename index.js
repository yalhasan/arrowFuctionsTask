// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) => `Hello, ${name}!`;
//console.log(greet("yasmeen"));

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

const sum1 = (num1, num2) => {
    total = num1 + num2;
    return total;
}

//or

const sum = (num1, num2) => num1+num2;

//console.log(sum(3, 4));

// Q3) Write a simple arrow function that squares a number.

const square = (num) => num**2;
//console.log(square(4));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const squareArray = (array) => {
    newArray = [];
    for(i = 0; i<array.length; i++){
        newArray[i] = array[i]**2;
    }
    return newArray;
}

test = [1, 2, 3, 4];
console.log(squareArray(test));
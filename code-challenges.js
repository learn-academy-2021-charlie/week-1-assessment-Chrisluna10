// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// create a function called temp that takes in a number called degree.
// const temp = (degree) => {
// if degree is more than or equal to 213, return "(degree) is above boiling point."
//     if(degree >= 213) {
//     return `${degree} is above boiling point`
// }
// if degree is less than or equal to 211, return "(degree) is below boiling point."
//     else if(degree <= 211) {
//     return `${degree} is below boiling point`
// }
// if degree is equal to 213, return "(degree) is at boiling point."
//     else {
//     return `${degree} is at boiling point`
// } 
// }
// console.log(temp(221))
// console.log(temp(212))
// console.log(temp(9))
// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

// create a function called myNumbers3 that combines the first two variables myNumbers1 and myNumbers2
// const myNumbers3 = (myNumbers1.concat(myNumbers2)) => {
// return an output that sorts the numbers from least to greatest.
//     return myNumbers3.sort((a, b)=> a-b)
// }






// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

var myString1 = "bravo"
var myString2 = "charlie"
// combine .split to break up each letter into its own array then reverse the array with .reverse and finally join each letter back together to return the required output. 
// I tried creating a function around this combination but I was unable to.
// console.log(myString1.split("").reverse().join(""))
// console.log(myString2.split("").reverse().join(""))



// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

var numberExample1 = 42
var numberExample2 = 27
// create a function called subtraction that takes in two numbers.
// const subtraction = (num1, num2) =>{
// if two numbers are inputed, return the answer to the first one being subtracted by the second.
//     return num1 - num2
// }
// console.log(subtraction(42, 27))

// var numberExample3 = 7
// var numberExample4 = 19

// const subtraction = (num1, num2) =>{
//     return num1 - num2
// }
// console.log(subtraction(42, 27))

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"
// tried including type of in different areas but I was not able to get it to work.
const subtraction = (num1, num2) =>{
        if(num1, num2)
    return typeof num1 - num2
    }
console.log(subtraction (42, "hello"))
// var numberExampleRefactor3 = 27
// var numberExampleRefactor4 = 24

// const subtraction = (num1, num2) =>{
//     return typeof num1 - num2
// }
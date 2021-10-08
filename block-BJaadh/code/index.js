// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);


// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);


// - Convert value of strings array into a sentance like "This is a collection of words"

let final =  strings.reduce((acc,val) => {return acc + " " + val }, "")


// - Add two new words in the strings array "called" and "sentance"

strings.push("called", "sentance");


// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

final =  strings.reduce((acc,val) => {return acc + " " + val }, "")


// - Remove the first word in the array (strings)
delete strings[0];
strings.shift();


// - Find all the words that contain 'is' use string method 'includes'
let wordIs = strings.filter(val => {return val.includes("is")});


// - Find all the words that contain 'is' use string method 'indexOf'





//console.log( strings.indexOf(strings.includes("is"),));

// - Check if all the numbers in numbers array are divisible by three use array method (every)

let divByThree = numbers.every((num) => {return num % 3 === 0});


// -  Sort Array from smallest to largest

let newNumbers = [...numbers];

function compareFunction(a, b) {
  return a - b ;
}
newNumbers.sort(compareFunction)


// - Remove the last word in strings
strings.pop();


// - Find largest number in numbers

let largeNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largeNumber) {
    largeNumber = numbers[i];
  }
}



// - Find longest string in strings

let logestString = ""; 

for (let i = 0; i < strings.length; i++) {
  if (strings[i].length > logestString.length) {
    logestString = strings[i];
  } 
}


// - Find all the even numbers

let evenNumbers = numbers.filter((num) => {return num % 2 === 0});


// - Find all the odd numbers

let oddNumbers = numbers.filter((num) => {return num % 2 !== 0});


// - Place a new word at the start of the array use (unshift)

strings.unshift("John");


// - Make a subset of numbers array [18,9,7,11]

let newNumbersArray = [...numbers]
newNumbersArray.splice(newNumbersArray.indexOf(18),4,[18,9,7,11]);


// - Make a subset of strings array ['a','collection']

let newString = [...strings];
newString.splice(newString.indexOf("a"),2,['a','collection']);


// - Replace 12 & 18 with 1221 and 1881

numbers.splice(numbers.indexOf(12),1,1221);
numbers.splice(numbers.indexOf(18),1,1881)


// - Replace words in strings array with the length of the word

function lengthOfArray(val) {
  return val.length
}

let finalLength = strings.map(lengthOfArray)


// - Find the sum of the length of words using above question

let sumOfLength = finalLength.reduce((acc,num) => {return acc + num },0);




// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];


// - Find all customers whose firstname starts with 'J'

// let customerStartWithJ = []

// for(let val of customers) {
//   let valFirstName = val.firstname;

//   if (valFirstName.startsWith("J")) {
//     customerStartWithJ.push(valFirstName)
//   } 
// }


function customerOfJ(val) {
  let valFirstName = val.firstname;

  if (valFirstName.startsWith("J")) {
    return valFirstName;
  } 
}
let customerStartWithJ = customers.filter(customerOfJ);

console.log(customerStartWithJ);


// - Create new array with only first name

let onlyFirstName = [];

function firstNameFunction(val) {
  return onlyFirstName.push(val.firstname);
}

customers.map(firstNameFunction);

console.log(onlyFirstName);



// - Create new array with all the full names (ex: "Joe Blogs")

let fullName = [];

function fullNameFunction(val) {
  return fullName.push(`${val.firstname} ${val.lastname}`);
}

customers.map(fullNameFunction);

console.log(fullName);


// - Sort the array created above alphabetically

console.log(fullName.sort());


// - Create a new array that contains only user who has at least one vowel in the firstname.

let user = [];

function firstNameO(val) {
  let valFirstName = val.firstname;

  if (valFirstName.includes("a")) {
    return user.push(val.firstname);
  } else if (valFirstName.includes("e")) {
    return user.push(val.firstname);
  } else if (valFirstName.includes("i")) {
    return user.push(val.firstname);
  } else if (valFirstName.includes("o")) {
    return user.push(val.firstname);
  } else if (valFirstName.includes("u")) {
    return user.push(val.firstname);
  }
}

customers.map(firstNameO);


















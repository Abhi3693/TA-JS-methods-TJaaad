let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

let newWords = [...words]
let longWord = (a, b) => {return b.length - a.length}
let findLongestWord = newWords.sort(longWord);
console.log(findLongestWord[0]);



// - Convert the above array "words" into an array of length of word instead of word.

let wordToLength = words.map((value) => { return value.length});
console.log(wordToLength);



// - Create a new array that only contains word with atleast one vowel.

let wordWithVowel = words.filter((value) => { return value.includes("a") || value.includes("e") || value.includes("i") || value.includes("o") || value.includes("u") });
console.log(wordWithVowel);


// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));


// - Create a new array that contians words not starting with vowel.

 function wordStartWithAplphabet(value)  {
  if (value.startsWith("a") || value.startsWith("e") || value.startsWith("i") || value.startsWith("o") || value.startsWith("u")) {
    return false;
  } else {
    return value;
  }
}

let wordStartAlphabet = words.filter(wordStartWithAplphabet);
console.log(wordStartAlphabet);


// - Create a new array that contianse words not ending with vowel

function wordEndWithAplphabet(value)  {
  if (value.endsWith("a") || value.endsWith("e") || value.endsWith("i") || value.endsWith("o") || value.endsWith("u") || value.endsWith("a")) {
    return false;
  } else {
    return value;
  }
}

let wordEndAlphabet = words.filter(wordEndWithAplphabet);
console.log(wordEndAlphabet);












let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

let findSum = (prev, curr) =>  prev + curr;
let sum = numbers.reduce(findSum, 0)
console.log(sum);


// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let multiplyByThree = numbers.map((value) => {
  return value * 3;
});
console.log(multiplyByThree);


// - Create a new array that contains only even numbers

let even = numbers.filter((value) => {
  return value % 2 === 0;
});
console.log(even);


// - Create  a new array that contains only odd numbers.

let odd = numbers.filter((value) => {
  return value % 2 !== 0;
});
console.log(odd);


// - Create a new array that should have true for even number and false for odd numbers.

let findOddAndEven = numbers.map((value) => {
  if (value % 2 === 0){
    return true;
  } else {
    return false;
  }
});
console.log(findOddAndEven);


// - Sort the above number in assending order.

let newNumbers = numbers.sort((a,b) => {
  return a - b;
})
console.log(newNumbers);


// - Does sort mutate the original array?

// Sort mutate Array


// - Find the sum of the numbers in the array.

let findSumofArray = (prev, curr) => prev + curr;
let sumOfNumbers = numbers.reduce(findSum,0);
console.log(sumOfNumbers);


//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let findsum = (prev,curr) => {
  return prev + curr;
}

let avgNumbers = numbers.reduce(findsum) / numbers.length;
console.log(avgNumbers);












let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.


let allString = (prev, curr) => {
  return prev + curr.length
}
let avgString = strings.reduce(allString, 0) / strings.length;
console.log(avgString);

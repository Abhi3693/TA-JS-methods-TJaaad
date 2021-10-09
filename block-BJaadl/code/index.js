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

function wordWithVowel(value)  { 
    return (
    value.includes("a") || 
    value.includes("e") || 
    value.includes("i") || 
    value.includes("o") || 
    value.includes("u")
    )
 };

 let vovelFilter = words.filter((w) => wordWithVowel(w))
console.log(vovelFilter);


// - Find the index of the word "rhythm"
console.log(words.findIndex((val) => val == "rhythm"));

// - Create a new array that contians words not starting with vowel.

//  function wordStartWithAplphabet(value)  {
//   if (value.startsWith("a") || value.startsWith("e") || value.startsWith("i") || value.startsWith("o") || value.startsWith("u")) {
//     return false;
//   } else {
//     return value;
//   }
// }

// let wordStartAlphabet = words.filter(wordStartWithAplphabet);
// console.log(wordStartAlphabet);

let notWithVowel = words.filter(
  (w) => !wordWithVowel(w[0])
  );

  console.log(notWithVowel)


  
// - Create a new array that contianse words not ending with vowel

// function wordEndWithAplphabet(value)  {
//   if (value.endsWith("a") || value.endsWith("e") || value.endsWith("i") || value.endsWith("o") || value.endsWith("u") || value.endsWith("a")) {
//     return false;
//   } else {
//     return value;
//   }
// }

// let wordEndAlphabet = words.filter(wordEndWithAplphabet);
// console.log(wordEndAlphabet);


let notEndingWithVowel = words.filter(
  (w) => !wordWithVowel(w[w.length - 1])
  );

  console.log(notEndingWithVowel);










let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

// let findSum = (prev, curr) =>  prev + curr;
// let sum = numbers.reduce(findSum, 0)
// console.log(sum);


function sumArray (array) {
  return array.reduce((prev, curr) => {
    return prev + curr;
  },0)
}


// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let multiplyByThree = numbers.filter((value) => {
  return value % 3 === 0;
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

let findOddAndEven = numbers.map((value) => value % 2 === 0);
console.log(findOddAndEven);


// - Sort the above number in assending order.

let sortedArray = [...numbers].sort((a,b) => a - b);
console.log(sortedArray);


// - Does sort mutate the original array?

// Sort mutate Array


// - Find the sum of the numbers in the array.

let sum = numbers.reduce((prev, curr) => {
  prev = prev + curr;
  return prev;
},0)
console.log(sum);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(array) {
  let avg = array.reduce((prev, curr) => {
    prev = prev + curr;
    return prev;
  },0) 

  return avg / numbers.length
}








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


// let allString = (prev, curr) => {
//   prev =  prev + curr.length;
//   return prev;
// }
// let avgString = strings.reduce(allString, 0) / strings.length;
// console.log(avgString);


function avgOfString(words) {
  return (
     words.map((val) => val.length).reduce((prev, curr) => {
      prev = prev + curr;
      return prev;
    },0) / strings.length
  )
}
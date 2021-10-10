let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array

function addAllPeopleName (value) {
  return (value.name);
}

let peopleName = persons.map((w) => addAllPeopleName(w));
//console.log(peopleName);


// Create an array peopleGrade and store the value of grade key from persons array

function addPeopleGrade (value) {
  return value.grade;
}

let peopleGrade = persons.map((w) => addPeopleGrade(w));
//console.log(peopleGrade);


// Create an array peopleSex and store the value of sex key from persons array

function addPeopleSex (value) {
  return value.sex;
}

let peopleSex = persons.map((w) => addPeopleSex(w));

//console.log(peopleSex);


// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let JP = peopleName.filter((val) => {
  return val[0] === "J" || val[0] === "P"
})


// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

let AC = peopleName.filter((val) => {
  return val[0] === "A" || val[0] === "C"
})


// Log all the filtered male ('M') in persons array

let filterAllMale = persons.filter((val) => {

  if  (val.sex === "M") {
    return val.name;
  };
})


// Log all the filtered female ('F') in persons array

let femaleName = [];

let filterAllFemale = persons.filter((val) => {

  if  (val.sex === "F") {
    return val.name;
  };
})


// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let femalewithCJ = femaleName.filter((val) => { 
  return val[0] === "C" || val[0] === "J"
})


// Log all the even numbers from peopleGrade array

let even = peopleGrade.filter((val) => {return val % 2 === 0})


// Find the first name that starts with 'J' in persons array and log the object

let firstNameJ = persons.filter((val) => {return val.name[0] === "J" });


// Find the first name that starts with 'P' in persons array and log the object

let firstNameP = persons.filter((val) => {return val.name[0] === "P" });


// Find the first name that starts with 'J', grade is greater than 10 and is a female

let firstNameJ10 = persons.filter((val) => {return val.name[0] === "J" && val.grade > 10 });


// Filter all the female from persons array and store in femalePersons array



let femalePersons = persons.filter((val) => { 
  if (val.sex === "F") {
    return val
  }
})


// Filter all the male from persons array and store in malePersons array



let malePersons = persons.filter((val) => { 
  if (val.sex === "M") {
    return val
  }
})


// Find the sum of all grades and store in gradeTotal

let gradeTotal = peopleGrade.reduce((prev, curr) => {
  return prev + curr;
},0);



// Find the average grade

let gradeAvg = gradeTotal / persons.length;



// Find the average grade of male

let allMaleGrade = [];

let maleGrade = persons.filter((value) => {
  if (value.sex === "M") {
    return allMaleGrade.push(value.grade);
  }
});

let sumMaleGrade = allMaleGrade.reduce((prev, curr) => {
  return prev + curr;
},0);

let  avgGradeMale = sumMaleGrade / allMaleGrade.length



// Find the average grade of female

let allFemaleGrade = [];

let femaleGrade = persons.filter((value) => {
  if (value.sex === "F") {
    return allFemaleGrade.push(value.grade);
  }
});

let sumFemaleGrade = allFemaleGrade.reduce((prev, curr) => {
  return prev + curr;
},0) 

let avgGradeFemale =  sumFemaleGrade /  allFemaleGrade.length;



// Find the highest grade

let highestGrade = peopleGrade.sort((a, b) => {
  return a - b;
})

let bigGrade = highestGrade[highestGrade.length - 1];



// Find the highest grade in male

let highestGradeMale = allMaleGrade.sort((a, b) => {
  return a - b;
})

let highestMale = highestGradeMale[highestGradeMale.length - 1];


// Find the highest grade in female

let highestGradeFemale = allFemaleGrade.sort((a, b) => {
  return a - b;
})

let highestFemale = highestGradeFemale[highestGradeFemale.length - 1];



// Find the highest grade for people whose name starts with 'J' or 'P'

let allGradeOFJP = []

let gradeOfJP = persons.filter((val) => {
  if (val.name[0] === "J" || val.name[0] === "P") {
    return allGradeOFJP.push(val.grade)
  }
})

let highestGP = allGradeOFJP[allGradeOFJP.length - 1]


// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

let ascendingPeopleGrade = peopleGrade.sort((a, b) => {
  return a - b;
})

console.log(peopleGrade);

//console.log(ascendingPeopleGrade);


// Sort the peopleGrade in descending order
let descendingpeopleGrade = peopleGrade.sort((a, b) => {
  return b - a;
})

console.log(peopleGrade)
//console.log(ascendingPeopleGrade);


// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
let newPeopleGrade = [...peopleGrade]

let newDescendingpeopleGrade = newPeopleGrade.sort((a, b) => {
  return b - a;
})


//console.log(newDescendingpeopleGrade);


// Sort the array peopelName in ascending `ABCD..Za....z`

let peopleNameAscending = peopleName.sort();
console.log(peopleNameAscending);



// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array

let peopleNameDscending = peopleNameAscending.reverse()
console.log(peopleNameDscending);
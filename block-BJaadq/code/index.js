// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {

  let totalPeople = 0
  
    got.houses.forEach((house) => {
      totalPeople = totalPeople + house.people.length;
    })

  return totalPeople
}
  




function peopleByHouses() {

  let final = {};
  //let countPeople = 0

  got.houses.forEach((house) => {
    
    // countPeople = house.people.length
    // final = {...final, [house.name] : countPeople};
    final[house.name] = house.people.length

  })
  return final
}


  
  



function everyone() {
  
  let final = []

  got.houses.forEach((house) => {
    let peopleName = house.people.map((val) => {
      final.push(val.name)
    });
    
  })

  return final;

}




function nameWithS() {
  let allPeople = everyone();

  return  allPeople.filter((person) => person.includes("S") || person.includes("s"))
  
}






function nameWithA() {
  let allPeople = everyone();

  return  allPeople.filter((person) => person.includes("A") || person.includes("a"))
  
}



function surnameWithS() {
  let allPeople = everyone();

  return allPeople.filter((name) => 
       name.split(" ")[1].toLowerCase().includes("s")
    );
  
   
}



function surnameWithA() {
  let allPeople = everyone();

  return allPeople.filter((name) => 
       name.split(" ")[1].toLowerCase().includes("a")
    );
}

function peopleNameOfAllHouses() {

  let final = {}

  
  got.houses.forEach((house) => {

    final[house.name] = house.people.map((one) => one.name)
  })

  return final;
} 

// Testing your result after writing your function

console.log(countAllPeople());
// Output should be 33

 console.log(peopleByHouses());
// // Output should be
// // //{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

 console.log(everyone());
// // Output should be
// //["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

 console.log(nameWithS(), 'with s');
// // Output should be
// // ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

 console.log(nameWithA());
// // Output should be
// // ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

 console.log(surnameWithS(), 'surname with s');
// // Output should be
// // ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

 console.log(surnameWithA());
// // // Output should be
// // ["Lysa Arryn", "Jon Arryn"]

 console.log(peopleNameOfAllHouses());
// // Output should be
// // {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}

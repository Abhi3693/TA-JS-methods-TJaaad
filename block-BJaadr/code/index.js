// NOTE: You can only use the (reduce) array method to solve this exercise:

function countAllPeople() {

  let allPeople = got.houses.reduce((prev, curr) => {
    prev += curr.people.length
    return prev  
    
  }, 0)

  return allPeople
}





function peopleByHouses() {

   let totalPeople = ((prev, curr) => {
    
       return {...prev, [curr.name] : [curr.people.length]}
   })

   return got.houses.reduce(totalPeople, {})
  
}







function everyone() {

  let reducer2 = ((prev, curr) => {
    return prev.concat(curr.name)
  })
  
  let reducer1 = ((prev, curr) => {
    return prev.concat(curr.people.reduce(reducer2, []))
  })


  return got.houses.reduce(reducer1, [])
}







function nameWithS() {
  let final = []

  let reducer2 = ((prev, curr) => {
    if (curr.name.includes("S") || curr.name.includes("s")) {
      final.push(curr.name)
    }

  });
  
  let reducer1 = ((prev, curr) => {

    return prev.concat(curr.people.reduce(reducer2, []))
  });


   got.houses.reduce(reducer1, [])

   return final
}



function nameWithA() {
  let final = []

  let reducer2 = ((prev, curr) => {
    
    if (curr.name.includes("A") || curr.name.includes("a")) {
      final.push(curr.name)
    }

  });
  
  let reducer1 = ((prev, curr) => {

    return prev.concat(curr.people.reduce(reducer2, []))
  });


   got.houses.reduce(reducer1, [])
   
   return final
}






function surnameWithS() {
  let final = []

  let reducer2 = ((prev, curr) => {
    if (curr.name.split(" ")[1].startsWith("S")) {
      final.push(curr.name)
    }

  });
  
  let reducer1 = ((prev, curr) => {

    return prev.concat(curr.people.reduce(reducer2, []))
  });


   got.houses.reduce(reducer1, [])
   
   return final
}





function surnameWithA() {
  let final = []

  let reducer2 = ((prev, curr) => {
    if (curr.name.split(" ")[1].startsWith("A")) {
      final.push(curr.name)
    }

  });
  
  let reducer1 = ((prev, curr) => {

    return prev.concat(curr.people.reduce(reducer2, []))
  });


   got.houses.reduce(reducer1, [])
   
   return final
}




function peopleNameOfAllHouses() {



  let reducer2 = ((prev, curr) => {
    return prev.concat(curr.name);
  })

  let reducer1 = ((prev, curr) => {

    let name = curr.people.reduce(reducer2, [])

    return {...prev, [curr.name] : name}
  })


  return got.houses.reduce(reducer1, {});
}

// Testing your result after writing your function

console.log(countAllPeople());
//Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

  console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

 console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

 console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}

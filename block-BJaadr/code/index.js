// NOTE: You can only use the (reduce) array method to solve this exercise:

function countAllPeople() {
  const reducer = (sum, obj) => sum + obj.people.length;
  return got.houses.reduce(reducer, 0);
}






function peopleByHouses() {
  let totalPeople = (acc, val) => {return acc + (`${val.name} : ${val.people.length} `)}
   return got.houses.reduce(totalPeople,{})
}





function everyone() {
  const personReducer = (names, obj) => {
   
    names.push(obj.name);
    return names;
  }

  const peopleReducer = (names, obj) => {
    let newNames = obj.people.reduce(personReducer, []);
    
    return names.concat(newNames);
  };

  return got.houses.reduce(peopleReducer, []);
}





function nameWithS() {

  let filterNameS = (val) => {
    return val.includes("s") || val.includes("S");
  
  }
  
  const personReducer = (names, obj) => {
    names.push(obj.name);
    return names.filter(filterNameS);
  }

  const peopleReducer = (names, obj) => {
    let newNames = obj.people.reduce(personReducer, []);
    
    return names.concat(newNames);
  };

  return got.houses.reduce(peopleReducer, []);
}





function nameWithA() {
  let filterNameS = (val) => {
    return val.includes("a") || val.includes("A");
  
  }
  
  const personReducer = (names, obj) => {
    names.push(obj.name);
    return names.filter(filterNameS);
  }

  const peopleReducer = (names, obj) => {
    let newNames = obj.people.reduce(personReducer, []);
    
    return names.concat(newNames);
  };

  return got.houses.reduce(peopleReducer, []);
}





function surnameWithS() {
  let filterNameS = (val) => {
    return val.includes("S", 1);
  
  }
  
  const personReducer = (names, obj) => {
    names.push(obj.name);
    return names.filter(filterNameS);
  }

  const peopleReducer = (names, obj) => {
    let newNames = obj.people.reduce(personReducer, []);
    
    return names.concat(newNames);
  };

  return got.houses.reduce(peopleReducer, []);
}





function surnameWithA() {
  let filterNameS = (val) => {
    return val.includes("A", 1);
  
  }
  
  const personReducer = (names, obj) => {
    names.push(obj.name);
    return names.filter(filterNameS);
  }

  const peopleReducer = (names, obj) => {
    let newNames = obj.people.reduce(personReducer, []);
    
    return names.concat(newNames);
  };

  return got.houses.reduce(peopleReducer, []);
}






function peopleNameOfAllHouses() {

  let arrayReducer = (prev, current) => {
    return prev.concat([current.name]);
  }

  let totalPeople = (prev, current) => {

    let names = current.people.reduce(arrayReducer, []);
    return { ...prev, [current.name]: names };
    
  }
   return got.houses.reduce(totalPeople, {})
}





// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

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







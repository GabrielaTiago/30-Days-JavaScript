import { inventors } from "./dataUtils.js";

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

//****************************************************************************************//

// 1. Filter the list of inventors for those who were born in the 1500's
function birthYear() {
  const fifteen = inventors.filter(
    (inventor) => inventor.year >= 1500 && inventor.year < 1600
  );
  return fifteen;
}

console.table(birthYear());

//**************************************************************************************//

// 2. Give us an array of the inventors first and last names

function fullNames() {
  const names = inventors.map(
    (inventor) => `${inventor.first} ${inventor.last}`
  );
  return names;
}

console.table(fullNames());
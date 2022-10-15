import { data, inventors, people } from "./dataUtils.js";

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

//**************************************************************************************//

// 3. Sort the inventors by birthdate, oldest to youngest

function youngestList() {
  const youngest = inventors.sort((a, b) => {
    if (a.year > b.year) return 1;
    else return -1;
  });
  return youngest;
}

console.table(youngestList());

//**************************************************************************************//

// 4. How many years did all the inventors live all together?

function numberOfLivedYears() {
  const lifeTime = inventors.reduce((acc, inventor) => {
    const life = inventor.passed - inventor.year;
    return acc + life;
  }, 0);

  return lifeTime;
}

console.log(numberOfLivedYears());

//**************************************************************************************//

// 5. Sort the inventors by years lived

function longerLifeyime() {
  const lifetime = inventors.sort((a, b) => {
    const lifeA = a.passed - a.year;
    const lifeB = b.passed - b.year;

    return lifeA > lifeB ? -1 : 1;
  });
  return lifetime;
}

console.table(longerLifeyime());

//**************************************************************************************//

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

function boulevardsWhithDe() {
  const category = document.querySelector(".mw-category");
  const links = [...category.querySelectorAll("a")];

  const filter = links
    .map((link) => link.textContent)
    .filter((street) => street.includes("de"));

  return filter;
}

//**************************************************************************************//

// 7. Sort the people alphabetically by last name

function sortByTheLastName() {
  const sort = people.sort((current, next) => {
    const [currentFirstName, currentLastName] = current.split(", ");
    const [nextFirstName, nextLastName] = next.split(", ");

    if (currentLastName > nextLastName) return 1;
    else return -1;
  });

  return sort;
}

console.table(sortByTheLastName());

//**************************************************************************************//

// 8. Sum up the instances of each of the automobile

function automobile() {
  const sumAutomobile = data.reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = 1;
    }
    acc[item]++;
    return acc;
  }, {});

  return sumAutomobile;
}

console.log(automobile());

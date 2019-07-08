'use strict';
function createGreeting(name, age) {
  return `Hi my name is ${name} and I'm ${age} years old. I was born ${getYearOfBirth(age)}.`;
}

function getYearOfBirth(age) {
  return 2019 - age;
}



const greeting1 = createGreeting();
console.log(greeting1);

'use strict';

function yearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age can not be negative');
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  return `Hi my name is ${name} and I'm ${age} years old. I was born ${yearOfBirth(age)}.`;
}



try {
  const greeting1 = createGreeting();
  console.log(greeting1);
} catch(Error) {
  console.log(Error);
}

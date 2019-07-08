'use strict';

function jediName(firstName, lastName) {
  let startName = lastName.slice(0, 3);
  let endName = firstName.slice(0, 2);
  return `${startName}${endName}`;
}

console.log(jediName('bob', 'marley'));

function beyond(num) {
  if (num === Infinity || num === -Infinity) {
    console.log('And beyond');
  }
  else if (num > 0) {
    console.log('To infinity');
  }
  else if (num < 0) {
    console.log('To negative infinity');
  }
  else if (num === 0 ) {
    console.log('Staying home');
  }
}

function decodeWord(word) {

  let array = word.split('');
  if (array[0] === 'a') {
    return array[1];
  } else if (array[0] === 'b') {
    return array[2];
  } else if (array[0] === 'c') {
    return array[3];
  } else if (array[0] === 'd') {
    return array[4];
  } else {
    return ' ';
  }
}

function decode(code) {
  let words = code.split(' ');
  let decodedPhrase = [];
  for (let i=0; i < words.length; i++) {
    decodedPhrase.push(decodeWord(words[i]));
  }
  return decodedPhrase.join('');
}

console.log(decode('craft block argon meter bells brown croon droop'));

function daysInMonth(month, leapYear = false) {
  let days;
  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    days = 31;
    break;
  case 'Febuary':
    if (leapYear) {
      days = 29;
      break;
    } else {
      days = 28;
      break;
    }
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    days = 30;
    break;
  }
  return `${month} has ${days} days`;
}

console.log(daysInMonth('January'));
console.log(daysInMonth('Febuary', true));
console.log(daysInMonth('Febuary'));
console.log(daysInMonth('June'));

function rockPaperScissors(num) {
  const rNum = Math.floor(Math.random() * 3) + 1;

  if (num !== 1 && num !== 2 && num !== 3) {
    throw new Error('You must pick 1 or 2 or 3!');
  }
  if (num === rNum) {
    console.log('It\'s a tie');
  } else if ((num === 1 && rNum === 3) || (num === 2 && rNum === 1) || (num === 3 && rNum === 2)) {
    console.log('You win!');
  } else {
    console.log('You lose.');
  }
}

try {
  rockPaperScissors(1);
  rockPaperScissors(2);
  rockPaperScissors(3);
  rockPaperScissors(7);
}
catch(error) {
  console.error(error);
}

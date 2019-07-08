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
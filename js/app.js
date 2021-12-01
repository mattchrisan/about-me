'use strict';

// console.log('hello world');

//Question One correct answer yes

// let answerOne = prompt('Am I from Washington?').toLowerCase();

// // let normalizedAnswerOne = answerOne.toLowerCase();

// if (answerOne === 'yes' || answerOne=== 'y'){
//   // console.log('YES, I am from Washington!');
//   alert('Yes, I am from Washington!');
// }

// function askUserQuestion(){
let userName = prompt('Please Enter Your Name!');
alert('Welcome ' + userName);

let pizza = prompt('Do you like Pizza?').toLowerCase();

// console.log('Yes, I love pizza!');

if (pizza === 'yes' || pizza === 'y') {
  alert('Yes, I love pizza too!');
}

let movies = prompt('Do you like movies?').toLowerCase();

// console.log('Yes, I love them!!!');

if (movies === 'yes' || movies === 'y') {
  alert('Yes, I love them!!!');
}

let cars = prompt('Do you like cool cars?').toUpperCase();

// console.log('Yes, I love cool cars as well!');

if (cars === 'YES' || cars === 'Y') {
  alert('Nice, I love cool cars also!');
}

let hawks = prompt('Are you a hawks fan?').toUpperCase();

// console.log('Awesome, me too!');

if (hawks === 'YES' || hawks === 'Y') {
  alert('Awesome, me too!');
}

let videogames = prompt('Do you like videogames?').toLowerCase();

// console.log('Sweet, I do to!');

if (videogames === 'yes' || videogames === 'y') {
  alert('Sweet, I do to!');
}

alert('Thank you for visiting ' + userName);

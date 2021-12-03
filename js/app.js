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

console.log('Awesome, me too!');

if (hawks === 'YES' || hawks === 'Y') {
  alert('Awesome, me too!');
}

let videogames = prompt('Do you like videogames?').toLowerCase();

// console.log('Sweet, I do to!');

if (videogames === 'yes' || videogames === 'y') {
  alert('Sweet, I do to!');
}

//guessing game for how old am I with 4 guess attempts

function guessingGame(){
  let attempts = 4;
  for(let i = 0; i <= attempts; i++){
  let userAnswer = prompt('Guess how old I am?');
  let correctAnswer = 36;

    // while(userAnswer < 1 || userAnswer > 100){
      // userAnswer = prompt('Sorry not my age try again');
   console.log() 
    if (userAnswer == correctAnswer){
      alert('Congratulations! You are correct and also the next contestant on the price is right!');
      // document.write("Winner");
      break;
    } else if (userAnswer > correctAnswer){
        alert('Too high try again!');
        // userAnswer = prompt('Ah Ah Ah, you didnt guess the magic number!  Too high try again!');
    } else if (userAnswer < correctAnswer){
        alert('Too low try again!');
        // userAnswer = prompt('Ah Ah Ah, you didnt guess the magic number!  Too low try again!');
    }
    if(i == attempts){
      alert('The correct answer was ' + correctAnswer);
      // document.write("Sorry Try Again Next Time");
  }
// }
}
}
guessingGame()

function favoriteMovies(){
  let attempts = 6;
  for(let i = 0; i <= attempts; i++){
    let userAnswer = prompt('Guess what my favorite movies are?');
    let movies = ['Batman', 'Hitch', 'Matrix'];
      
      if (userAnswer == movies[0],[1],[2]){
        alert('Congratulations!  You are correct and also the next contestant on the price is right!');
        break;
      } else if (userAnswer > movies){
          alert('Sorry try again!');
      } else if (userAnswer < movies){
          alert('Sorry try again!');
      }
      if(i === attempts){
        alert('The correct answer was ' + movies);
      }
    }
    let ending = alert('Well done ' + userName  Thanks for playing my game!  You got ${counter} / 7!);

    // let ending = alert(`Well done ${userName})! Thanks for playing my game!  You got ${counter} / 7!`);
  }
  favoriteMovies()

  




alert('Thank you for visiting ' + userName);

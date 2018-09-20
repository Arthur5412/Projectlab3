'use strict';
correctAnswers=0;
var name=prompt('what your name?');
var realName=name.toUpperCase();
var responseAnswer='Hello ' + realName + ' we are going to play a game';
console.log(responseAnswer);
alert(responseAnswer);

var pet=prompt('Have i ever owned a dog');
var realPet=pet.toUpperCase();
if(realPet ==='YES'|| realPet === 'Y')
{
    console.log(realPet)
    alert('you are right');
} else if (realPet === 'NO'|| realPet =='N') {
    console.log(realPet);
 alert('you are not right') ;
}

var lived=prompt('Have i ever lived in Tacoma?');
var haveLived=lived.toUpperCase();
if(haveLived ==='YES'|| haveLived === 'Y')
{
    console.log(haveLived);
    alert('you are right');
} else if (haveLived === 'NO'|| haveLived ==='N') {
    console.log(haveLived);
 alert('you are not right') ;
}

var color=prompt('Is my favourite color blue');
var favColor=color.toUpperCase();
if(favColor ==='YES'|| favColor === 'Y')
{
    console.log(favColor);
    alert('you are right');
} else if (favColor === 'NO'|| favColor ==='N') {
    console.log(favColor)
 alert('you are not right') ;
}

var sport=prompt('Is my favourite sport football');
var favSport=sport.toUpperCase();
if(favSport ==='YES'|| favSport === 'Y')
{
    console.log(favSport);
    alert('you are right');
} else if (favSport === 'NO'|| favSport ==='N') {
    console.log(favSport);
 alert('you are not right') ;
}

var i = 0;
var number = 3;
while (i < 4) {
var myNumber = prompt('What is my favorite number?');
  i++;
  
  if(myNumber < number){
	alert('That guess is too low!');
  }else if (myNumber > number) {
  alert('that guess is too high!');
  }else{
	correctAnswers++;
 alert('That guess is correct! My favority number is ' + myNumber);
    break;
  }

  }


  var states = ['minnesota', 'newyork', 'washington', 'idaho'];


  var i = 0;
  while (i < 6) {
    var myStates = prompt('Guess the states i have lived in?');
    i++;
    var correctAnswer = false;
    for(var j=0;j<states.length;j++){
      if (states === myStates[j]) {
        correctAnswers = true;
        break;
      }
    }
    
    if(correctAnswer){
      correctAnswers++;
      alert('correct! ' + states.join(", ") + ' you guessed correct!');
      break;
    }
    
    alert('that is wrong');
    
  
  }
alert(game + " you got " + correctAnswers + " correct answers out of 7! Thanks for playing! ");
alert('this is where it all comes to the end thank you for your sport ' + realName.toLowerCase());

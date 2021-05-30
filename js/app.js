'use strict';
// q1
let score = 0;
let userName = prompt('What is your name?')
function userName1(){
 alert('Welcome ' + userName)
}

// q2
function docu(){
let docu = prompt('Do you think I like watching documentaries ?')

docu = docu.toLowerCase();

switch(docu){
case 'yes':
case 'y':
    //console.log('You are right!');
    alert('You are right!');
    break;

case'no':
case'n':
alert('You are wrong actually');
break;
default:
    alert('None is true');
}
}

// q3
function anim(){
let anim = prompt('What about animation?')

anim = anim.toLowerCase();
switch(anim){
case 'yes':
case 'y':
     //console.log('You are right!');
    alert('You are totally right!');
    break;

case'no':
case'n':
alert('Nope! I do actually');
break;

default:
    alert('None is true');
}
}

// q4
function comd(){
let comd = prompt('This one is easy. Do you think I like Comedy movies?')

comd = comd.toLowerCase();
switch(comd){
case 'yes':
case 'y':
     //console.log('You are right!');
    alert('Sure! Who doesnt?!');
    break;

case'no':
case'n':
alert('I think guessing is not your thing.. =P');
break;

default:
    alert('None is true');
}
}

// q 5
function ser(){
let ser = prompt('How about series? Do you think I like wathcing them?')

ser = ser.toLowerCase();
switch(ser){
case 'yes':
case 'y':
     //console.log('You are right!');
    alert('Sure thing!');
    break;

case'no':
case'n':
alert('Incorrect!');
break;

default:
    alert('None is true');
}
}

//q6
function horrMovie(){ 
let horrMovie = prompt('This is the last one..Do you think I like horror movies?')

horrMovie = horrMovie.toLowerCase();
switch(horrMovie){
case 'yes':
case 'y':
     //console.log('You are right!');
    alert(userName + 'You are so right! now we can be friends B-)');
    break;

case'no':
case'n':
alert('Sorry! you are wrong' + userName );
break;

default:
    alert('None is true');
}
}


function guessNum(){

for(let i = 0 ; i <= 3 ; i++){
let guessNum = prompt('Guess What is My Luky Number?');
guessNum = Number(guessNum);
      
    if(guessNum === 22){
    score++;
    alert('You are Right!');
    break;
    }else if( guessNum < 22){
    alert ('Too low!');
    }else if ( guessNum > 22){
    alert('Too high!');
    }
    if ( i ===3){
        alert('Sorry! you lost')
    }
}
}

function favCities(){
let favCities= ['Istanbul', 'Eskisehir','Amasra','Ilgaz'];
outerloop : for (let i = 0 ; i < 6; i++){
let userAnswer = prompt('Can you guess one of my favorite Turkish cities?');
 for(let j = 0; j < favCities.length ; j++) {
      if (userAnswer === favCities[j]){
          alert('Correct!');
          score++;
          break outerloop;
        }
    }
    if( i === 5){
        alert('Sorry! you lost. My Fav Turkish cities are:  ' + favCities);
    }
}
}

function multFunction(){
    userName1();
    docu();
    anim();
    ser();
    comd();
    horrMovie();
    guessNum();
    favCities();
}
multFunction();

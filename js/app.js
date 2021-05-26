'use strict';
// q1

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


function multFunction(){
    userName1();
    docu();
    anim();
    ser();
    comd();
    horrMovie();
}

multFunction();

// let guessNum = prompt('Guess What is My Luky Number?');

// while(Number(guessNum) !== 2){
//     guessNum = prompt('Incorrect!')
// }



// let guessNum = 6;
// let correctAns = 2;
// let check = true 

// while(guessNum !=0){
//     guessNum --;
//  let guessAgain = prompt('guess again!');

//  for (let x=0 ; x < 4 ; x++)
//  nconsole.log(correctAns[x]);

//  if( guessAgain == correctAns[x]){
//      alert("Well Done!")

//     guessNum = 0;
//     check = false
//     break;
//  }
// if (check){
//     alert('Wrong! Try again')
//     break;
// }
// }

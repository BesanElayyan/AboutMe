'use strict';

let userName = prompt('What is your name?')
alert('Welcome' + userName)

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



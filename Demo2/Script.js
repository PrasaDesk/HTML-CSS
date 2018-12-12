/*
let x = 'praad';
var y = 20;

x > y ? console.log(x) : y > x ? console.log(y) : x === y ? console.log('equal') : console.log('undefine');
*/

/***********************************
* var vs Let
***********************************/

console.log(x);
var x = 10;
console.log(x);

//console.log(y); 
let y = 20;
console.log(y);

function demo(){
    console.log(y+10, x+10);
}

demo();

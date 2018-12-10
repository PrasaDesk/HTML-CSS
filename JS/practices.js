/*
var firstname = prompt('Enter First NAME ?');
var lastname = prompt('Enter the last NAME ?');

console.log(firstname + ' ' +lastname);

////////////////////////////////////////////////////////////////////////////////////////////////

var x = 1000;
var y = 200;

var value;

value = x - 255;
console.log(value);

value = y + 290;
console.log(value);

value = y * 34;
console.log(value);

value = x / 25;
console.log(value);

var bool;
bool = x > y;
console.log(bool);

console.log(x + ' ' + y + ' ' + value + ' ' + bool)


//////////////////////////////////////////////////////////////////////////////////////////////////

var x,y;
x = 10;
y = '10';

//if - else 
if(x == y)  //right (== this operator check only value)(it does type conversion at time of checking)
    console.log('right');
else
    console.log('false');

if(x === y)  //false (=== this oprator check va;ue and also check the type of variables)
    console.log('right');
else
    console.log('false');

//ternary operator

x >= 12 ? console.log('apple') : console.log('mango');
x >= 10 ? console.log('Apple') : console.log('Mango')

//switch case

var choice = prompt('enter the choice (1, 2, 3, 4, 5)');
switch(choice){
    case '1': console.log('One' + ' ' + 'First');
        break;
           
    case '2': console.log('Two' + ' ' + 'Second');
        break;
        
    case '3': console.log('Three' + ' ' + 'Third');
        break;
        
    case '4': console.log('Four' + ' ' + 'Fourth');
        break;
        
    case '5': console.log('Five' + ' ' + 'Five');
        break;
    
    default: console.log('Wrong Choic : ' + choice);
}

var age = prompt('Enter the Age : ');
switch(true){
    case age >= 1 && age <  12: console.log('Childern , Baby');
        break;
           
    case age >= 12 && age < 18: console.log('Teenage');
        break;
        
    case age >= 18 && age < 40: console.log('Adult');
        break;
        
    case age >= 40: console.log('seniour  citizen');
        break;
    
    default: console.log('Inavalid Age');
}

*/
/*
function calculateAge(tempAge){
    return 2018 - tempAge;
}

function retirmentAge(tempAge){
    if (tempAge >= 65)
        console.log('Already Retired....!!!');
    else
        return (65 - tempAge);
}

function main(){
    var Name = prompt('Enter the Name : ');
    var BirthYear = prompt('Enter the Birth Year : ');
    
    var Age =  calculateAge(BirthYear);
    console.log('Current Age of ' + Name + ' is ' + Age);
    
    var years =  retirmentAge(Age);
    console.log(Name + ' is going to retired in ' + years + ' years');
}

main();

*/

/*
//Array

var arr = ['prasad', 23, 10090];
var brr = new Array(1990, 2000, 2200, 3456);
console.log(arr);
console.log(brr);
console.log('Length of BRR is ' + brr.length);

//array inbuilt function or operations

arr.push('Bipin');
arr.push('Deepak');

arr.unshift('Shubham');

console.log(arr);
console.log('Index of Bipin is ' + arr.indexOf('Bipin'));

arr.pop();
arr.pop();
console.log(arr);

arr.shift(  );
console.log(arr);


arr[3] = 'Avinash';

console.log(arr); 
console.log(arr[1+2]);
/*
var jhon = ['jhon' , 1990 , 'developer'];

console.log(jhon.indexOf('tester'));
console.log(jhon.indexOf('tester') === -1 ? 'Jhon is Tester' : 'Jhon is Developer');

//console.log(isDeveloper);
*/
/*
var prasad = {
    firstName : 'Prasad',
    lastName : 'Yeole',
    Location : 'Pune',
    Number : 8237319046,
    family : ['prasad', 'Ashok', 'Jayshree'],
    isMarried : false,
    birthYear : 1990,
    calAge : function(){
         return 2018 - this.birthYear;
    }
};

console.log(prasad.firstName);
console.log(prasad.family[1]);
console.log(prasad.isMarried);

prasad.isMarried = true;

console.log(prasad.isMarried);

var Age = prasad.calAge();
console.log(Age);

var years= new Array(11,21,51);
var Name = ['abc', 'pqr', 'xyz']

console.log(Name.length);
console.log(Name[1]);
Name = Name.concat(years);
console.log(Name);
console.log(Name.length);

*/

/*
//loop and iteration

var x = 'This is JS loop : ';
var y = 10;
for(var i = 1; i <= y; i++){
    if( i == 3 || i == 8){
        console.log('continue');
        continue;
    }
    if(i == 9)
        break;
    console.log(x + i);
}
*/
//pattern in JS

var x = 5;

for(var i= 1; i <= x;i++){
    for(var j = 1;j <= i;j++){
        console.log(i + 'loop' + j);
    }
}

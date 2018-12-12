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

//pattern in JS

var x = 5;

for(var i= 1; i <= x;i++){
    for(var j = 1;j <= i;j++){
        console.log(i + 'loop' + j);
    }
}
*/
/*

//coding challange advance tip calculator

var bill = [200, 100, 40, 250, 90];
//var bill = [0];
var finalBill = [0];

function calTip(Amt1){
    var ret = 0;
    var Amt = Amt1.toExponential();
    if(Amt < 50){
        ret = (20/100) * Amt;
    }
    else if(Amt >= 50 && Amt < 200){
        ret = (15/100) * Amt;
    }
    else{
        ret = (10/100) * Amt;
    }
    
    return ret;
}

for(var i = 0; i < bill.length; i++){
//    bill[i] = prompt('Enter the Bill Amount of '+ (i+1) + ' Hotel : ');
    console.log('Bill Of '+ (i+1) +' Hotel is : ' + bill[i]);
}

for(var i = 0; i < bill.length; i++){
    finalBill[i] = (calTip(bill[i]) + bill[i]);
    console.log('Total (Tip + Bill) Bill Of '+ (i+1) +' Hotel is : ' + finalBill[i]);
}

*/

/*
//Hoisting

//calAge(1990);

function calAge(year){
    console.log(2018 - year);
}

//calAge(1997);

//AgeCal(1990);

var AgeCal = function(year){
    console.log(2018 - year);    
}

//AgeCal(1997);

var x = 50;

function foo(){
    //this.x = 200;
    var y = 100;
//    console.log(x);
//    console.log(y);
    doo();
    function doo(){
        var z = 150;
        console.log(x,y,z,a,b);
    }
    
    var a =200;
}
foo();
var b = 'prasad';   
*/


//Calculator

var jhon = {
    firstName : 'jhon',
    bills : [100, 90, 45, 250, 200],
        
    tipcal : function(){
        this.tip = [];
        this.finalBill = [];
        
        for(var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = bill * 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = bill * 0.15;
            } else {
                percentage = bill * 0.1;
            }
            
            // Add results to the corresponing arrays
            this.tip[i] = percentage;
            this.finalBill[i] = bill + percentage;
        }
    }
    
}

var david = {
    firstName : 'david',
    bills : [200, 30, 70, 350, 190],
    /*    
    tipcal : function(){
        this.tip = [];
        this.finalBill = [];
        
        for(var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = bill * 0.2;
            } else if (bill >= 50 && bill < 200) {
                percentage = bill * 0.15;
            } else {
                percentage = bill * 0.1;
            }
            
            // Add results to the corresponing arrays
            this.tip[i] = percentage;
            this.finalBill[i] = bill + percentage;
        }
    }*/
    
}


function calAvg(tip){
    var sum = 0;
    for(var i = 0; i < tip.length ; i++){
        sum = sum + tip[i];
    }
    
    return (sum / tip.length);
}

david.tipcal = jhon.tipcal;   //function borrowing

jhon.tipcal();
david.tipcal();


jhon.avg = calAvg(jhon.tip);
david.avg = calAvg(david.tip);

console.log(jhon, david);

if(jhon.avg > david.avg)
    console.log('Jhon paid more tip to Hotels');
else
    console.log('David paid more tip to Hotels');

//Destructuring
/********************************************************************************************* 
var [name, age] = ['prasad', 21];
console.log(name);
console.log(age);

document.writeln(name);
document.writeln(age);

name = 'Danial';
age = 56;

document.writeln(name);
document.writeln(age);

var destruct = function (year) {
    const age = new Date().getFullYear() - year;
    return [age, 65-age];
}

const [age1, retiement] = destruct(1997);
console.log(`Age is ${age1} and To retirment ${retiement} years left`);

********************************************************************************************/
/*
//Array
var boxes = document.querySelectorAll('.box');

///ES5
var boxarr = Array.prototype.slice.call(boxes);

boxarr.forEach(function(element){
    element.style.backgroundColor = 'dodgerblue';
});

//ES6
//const boxes1 = Array.from(boxes)
boxes.forEach(cur => {
    cur.style.backgroundColor = 'dodgerblue';
});
*/

//ES5
/*
for(var i = 0; i < boxarr.length ; i++){
    if(boxarr[i].className === 'box blue'){
        continue;
    }

    boxarr[i].textContent = 'Changed to Blue...!!!';
}
*/
//ES6
/*
for(var cur of boxarr){             //For of Rule
    if(cur.className === 'box blue'){
        continue;
    }
    cur.textContent = 'Changed to Blue...!!!';
}

for(var cur of boxarr){             //For of Rule
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'Changed to Blue...!!!';
}


//ES5
var ages = [12,17,6,9,19,3];

var full = ages.map(function (cur) {  
    return cur >= 18;
});

console.log(full);

console.log(full.indexOf(true));

console.log(ages[full.indexOf(true)]);

//ES6
*/
//Spread Operator
/*
function SumAges(a,b,c,d){
    return a+b+c+d;
}

var ages = [1,2,3,4];

var sum = SumAges(...ages);
console.log(sum);

var name1 = ['john', 'jane', 'jerry'];
var name2 = ['marry', 'mock', 'maddy'];

var allarr = [...name1, 'all added', ...name2];
console.log(allarr);

var h = document.querySelector('h1');

var boxes = document.querySelectorAll('.box');

const alltext = [h, ...boxes];
console.log(alltext);
Array.from(alltext).forEach(cur => cur.style.color = 'purple');

*/

//Rest Parameters
/*
function display(names){
    //console.log(names);
    var arg = Array.prototype.slice.call(arguments, 1);
    for(var i = 0; i < arg.length ; i++ ){
        console.log(arg[i]);
    } 
}

//display('Boys', 'prasad', 'bipin', 'Shubham', 'Deepak');

var arr = [12,34,65,87];
display('prasad', ...arr);


//Default  Parameters

function Person(firstName = 'Person', lastName = 'PersonLast', Age = 100, City = 'Default'){
    console.log('FirstName : ' + firstName);
    console.log('LastName ' + lastName)
    console.log('Age : ' + Age)
    console.log('City : ' + City)
}

Person('Prasad', 'yeole', 21);
Person('Prasad', 'yeole');
*/

//Map
/*
var Question = new Map();

Question.set('question', `What is the capital of INDIA ?`);
Question.set(1, 'Delhi');
Question.set(2, 'Mumbai');
Question.set(3, 'Banglor');
Question.set('correct', 1);
Question.set(true, 'This is the Right Answer.');
Question.set(false, 'This is the Wrong Answer.');


//Print the Question on Screen
{               
    console.log(Question.get('question'));

    for (let [key, value] of Question.entries()){
        if(typeof(key) === 'number'){
            console.log(`${key} : ${value}`);
        }
    }
}


while (true){
    const ans = parseInt(prompt('Enter the Write Answer : '));
    if(ans === Question.get('correct')){
        console.log(Question.get(true));
        break;
    }
    console.log(Question.get(false));
}
*/

//Class
/*
class person {
    constructor(firstName, lastName, YOB = 1990, City = 'Default'){
        this.firstName = firstName;
        this.lastName = lastName;
        this.YearOfBirth = YOB;
        this.City = City;
    }

    calculateAge() {
        var now = new Date();
        let age = now.getFullYear() - this.YearOfBirth;
        console.log(`Age of ${this.firstName} is : ${age}`);
        return age;
    }

    greeting(){
        console.log(`Hiiii ${this.firstName}, How are you ?`);
    }
}
/*
let john = new person('John', 'Smith', 2000);
let erika = new person('Erika', 'Pogorelove', 1995, 'Berlin');

console.log(john);
console.log(erika);

john.calculateAge();
erika.greeting();
*/
//class Inheritance
/*
class Athlete extends person{
    constructor(firstName, lastName, YOB, city, game, medal){
        super(firstName, lastName, YOB, city);
        this.Age = this.calculateAge(YOB);
        this.Game = game;
        this.Medals = medal;
    }

    wonMedal(){
        this.Medals++;
        console.log(this.Medals);
    }
}

var prasad = new Athlete('Prasad', 'yeole', 1997, 'Nashik', 'Badminton', '8');
console.log(prasad);

*/
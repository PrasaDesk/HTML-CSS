/**************************
* Function Constructor
**************************/
/*
var person = function(Name,YearOfBirth,job){
    this.Name = Name;
    this.YearOfBirth = YearOfBirth;
    this.job = job;
}

person.prototype.Age = function() {
        return (2018 - this.YearOfBirth);
    } 

var jhon = new person('Jhon', 1990, 'Developer');
var David = new person('David', 1985, 'Musician');
var Maria = new person('Maria', 1995, 'Designer');

console.log(jhon);
console.log(David);
console.log(Maria);

console.log(jhon.Name + '\t' +jhon.Age());
console.log(David.Name + '\t' +David.Age());
console.log(Maria.Name + '\t' +Maria.Age());

*/

/**************************
* Object Create
**************************/
/*
var person = {
  CalculateAge: function(){
      return 2018-this.YearOfBirth;
  }  
};

var jhon = Object.create(person);
jhon.Name = 'jhon';
jhon.YearOfBirth = 1990;
jhon.job = 'Developer';

console.log(jhon.Name+'\t'+jhon.CalculateAge());

var jane = Object.create(person, {
    Name : { value: 'jane'},
    YearOfBirth : { value: 1995},
    job : { value: 'Teacher'}
});

console.log(jane.Name+'\t'+jane.CalculateAge());

console.log(jhon, jane);

*/

/**************************
* Primitive vs Objects
**************************/

//premitives
/*
let x = 10;
let y = x;
x = 50;
console.log(x , y);

//Objects

var obj1 = {
    name: 'prasad',
    Age: 21
};

var obj2 = obj1;
obj1.Age = 25;
console.log(obj1);
console.log(obj2);

//Functions
var no = 20;
var demo = function(p, q){
    p = 23;             //primitive
    q.Age = 50;         //object (Obj reference)
}

demo(no, obj1);

console.log(no);
console.log(obj1.Age);

*/

/*******************************
* Passing a Function as Argument
*******************************/
/*
var arr = [1990, 2005, 2012, 1995, 1985, 1993, 2000, 1983];

var arrCal = function(arr, fn){
    var arrResult = [];
    for(var i = 0; i < arr.length
       ; i++){
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

var CalAge = function(el){
    return 2018 - el;
}

var Compare18 = function(el){
    return el >= 18;
}

var ages = arrCal(arr, CalAge);
var Compare = arrCal(ages, Compare18);

console.log(arr);
console.log(ages);
console.log(Compare);

*/

/******************************
* Returning a Function
******************************/
/*
var interViewQuestions = function(job){
    switch(job){
        case 'teacher':
            return function(name){
                console.log("Which Subject you teach, " + name);
            }
            break;
         case 'designer':
            return function(name){
                console.log("What is a UI or UX design , " + name);
            }
            break;
         case 'musician':
            return function(name){
                console.log("Which instrument you play , " + name);
            }
            break;
        default:
            return function(name){
                console.log("What you do , " + name);
            }
            
    }
}

// first way to call
interViewQuestions('teacher')('mark');

//second way to call
var teach = interViewQuestions('designer');
teach('jhon');

//third way to call
var teach = interViewQuestions('musician');
var que = teach('jane');
console.log(que);

interViewQuestions('builder')('Rock');

*/

/***********************************************
* Immdietaly invoked function Expression (IIFE)
***********************************************/
/*
(function (){
    var x = Math.random() * 10;
    console.log((x));
})();

(function (val){
    var x = Math.random() * 10;
    console.log(x);
    console.log(x >= 5-val)
})(3);

*/

/**************************************
* Clouser
**************************************/

function retirment(retiarmentAge){
    
    var a = ' year is remain for the Retiarment';
    console.log('Retiarment age :\t'+retiarmentAge);
    
    return function(YearOfBirth){
        var age = 2018 - YearOfBirth;
        document.querySelector('.age').innerHTML = age;
        console.log('Person Age : \t\t'+age);
        
        var ret = retiarmentAge - age;
        
        return ret;
        //console.log((retiarmentAge - age) + a);
    }
}

var retiarmentUS = retirment(66);

document.querySelector('.btn').addEventListener('click', function(){
    let temp = document.querySelector('.yob').value;
    document.querySelector('.Retage').innerHTML = retiarmentUS(temp);
});


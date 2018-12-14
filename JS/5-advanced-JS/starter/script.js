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
/*
function retirment(retiarmentAge){
    
    var a = ' year is remain for the Retiarment';
    console.log('Retiarment age :\t'+retiarmentAge);
    
    return function(YearOfBirth){
        
        if(YearOfBirth > 2018){
            console.log('Invalid Year');
            return 'Invalid';
        }
        
        var age = 2018 - YearOfBirth;
        document.querySelector('.age').innerHTML = age;
        console.log('Person Age : \t\t'+age);
        
        var ret = retiarmentAge - age;
        
        if(ret <= 0){
            ret = 'Retired';
        }
        
        return ret;
        //console.log((retiarmentAge - age) + a);
    }
}

var retiarmentUS = retirment(66);

document.querySelector('.btn').addEventListener('click', function(){
    let temp = document.querySelector('.yob').value;
    document.querySelector('.Retage').innerHTML = retiarmentUS(temp);
});

*/

/*****************************************
* Call, Bind And Apply
*****************************************/
/*
// Call

var person = {
    name : 'jhon',
    age : 22,
    job : 'Developer',
    presentation : function(style, greeting){
        switch(style){
            case 'formal':
                console.log('Good '+ greeting +', Ladies and Gentalmans; '+'Hi this is '+ this.name +' i\'m a '+ this.job + ', my Age is '+ this.age);
                break;
            
            case 'friendly':
                console.log('Hey, Good '+ greeting +', brothers and sisters; '+'Hi this is '+ this.name +' i\'m a '+ this.job + ', my Age is '+ this.age);
        }
    }
};

var emily = {
    name : 'Emily',
    age : 18,
    job : 'Musician'
};

person.presentation('formal', 'morning');

person.presentation.call(emily, 'friendly', 'afternoon');

//bind

var friendly = person.presentation.bind(emily, 'formal');

friendly('Evening');

var arr= [2013, 2000, 1997, 1990, 1982];

function ArrCalc(arr, fn){
    var brr = [];
    for(var i = 0; i < arr.length; i++){
        brr.push(fn(arr[i]));
    }
    return brr;
}

function CalAge(el){
    return 2018 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var Ages = ArrCalc(arr, CalAge);
console.log(Ages);

var FullAgeJapan = ArrCalc(Ages, isFullAge.bind(this, 20));
var FullAgeIndia = ArrCalc(Ages, isFullAge.bind(this, 18));

console.log('Japan  :\t'+ FullAgeJapan);
console.log('India  :\t'+ FullAgeIndia);


*/

/************************************************
* Coding Challange
************************************************/

(function(){
    
    var Questions = function(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Questions.prototype.displayQuestion = function() {
        console.log(this.question);
        for(var i = 0; i < this.answers.length ; i++){
            console.log(i +' : '+this.answers[i]);
        }
    }



    Questions.prototype.CheckAns = function(ans, callback) {   //here Callback is Function (score() [keepscore])

        var sc;

        if(this.answers[ans] === this.correct){
            console.log('Correct Amswer');
            sc = callback(true);
        }
        else{
            console.log('Wrong Answer');
            sc = callback(false);
        }
        this.CheckScore(sc);
    }




    Questions.prototype.CheckScore = function(score){
        console.log('Current Score is ' + score);
        console.log('----------------------------------------');
    }



    var que1 = new Questions('2 * 2 = ? ', [4, 7, 8], 4);
    var que2 = new Questions('10 / 2 = ? ', [50, 5, 12], 5);
    var que3 = new Questions('10 ^ 10 = ? ', [342, 203, 100], 100);

    var Question = [que1, que2, que3]


    //clouser
    function score() {
        var sc = 0;
        return function(correct){
            if(correct){
                sc += 2;
            }
            else{
                sc -= 1;
            }
            return sc;
        }
    }

    var keepScore = score();


    document.querySelector('.btn').addEventListener('click', function(){
        nextQuestion();
    });


    function nextQuestion(){

        var n = Math.floor(Math.random() * Question.length);

        Question[n].displayQuestion();

        //var ans = prompt('Enter the Correct Option : ');

        var ans = document.querySelector('.option').value

        if(ans !== 'exit'){
            Question[n] .CheckAns(parseInt(ans), keepScore); //Passing the function as argument    
            nextQuestion();
        }
    }

    nextQuestion();
    
})();
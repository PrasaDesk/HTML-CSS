
var BudgetController = (function(){

    //constructor for Expense
    var expense = function(id, desc, value){
        this.id = id;
        this.desc = desc;
        this.value = value;
        this.percentage = -1;
    }

    expense.prototype.calcPercentages = function(totalInc){

        if(totalInc > 0){
            this.percentage = Math.round((this.value / totalInc) * 100);
            //console.log('Percentage check : '+ this.percentage);
        }
        else{
            this.percentage = -1;
        }
    }

    expense.prototype.getPerc = function(){
        return this.percentage;
    }

    //constructor for Income
     var income = function(id, desc, value){
         this.id = id;
         this.desc = desc;
         this.value = value;
     }

     var calculateTotal = function (type) {
        var sum = 0;
        
        data.allItem[type].forEach(function (cur) {  
            sum += cur.value;
        });

        data.total[type] = sum;
     }

     //All data 
     var data = {
         allItem : {
            inc : [],
            exp : []
         },
         total : {
            inc : 0,
            exp : 0
         },
         budget : 0,
         percentage : -1
     }

     return {
         addItem : function (type, desc, value) {  
             var newItem, ID;

             //creating new ID for Item
             if(data.allItem[type].length > 0){
                ID = data.allItem[type][data.allItem[type].length - 1].id + 1
             }
             else{
                 ID = 0;
             }
             
             //create New Item with its Corresponding type
             if(type === 'exp'){
                 //newItem = new expense(type, desc, value);
                 newItem = new expense(ID, desc, value);
             }
             else if(type === 'inc'){
                 //newItem = new income(type, desc, value);
                 newItem = new income(ID, desc, value);
             }

             //Adding new Item to Corresponding Array
             
             data.allItem[type].push(newItem);


             //return the new item
             return newItem;
         },


         deleteItem: function(type, id) {
            var ids, index;
           
            //console.log('Income : '+ type + ' ID : '+ id);
            
            type == 'income' ? type = 'inc' : type = 'exp';
            
            ids = data.allItem[type].map(function(current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItem[type].splice(index, 1);
            }
            
        },

        
         calculateBudget : function () {  
            calculateTotal('exp');
            calculateTotal('inc');

            data.budget = data.total.inc - data.total.exp;

            if(data.total.inc > 0){
                data.percentage = Math.round((data.total.exp / data.total.inc ) * 100);
            }
            else{
                data.percentage = -1;
            }           

        },

        
        calculatePercentages : function(cur){
            data.allItem.exp.forEach(function(cur){
                cur.calcPercentages(data.total.inc);
            });
        },

        getPercentages : function(){
           var allPerc = data.allItem.exp.map(function(cur){
                return cur.getPerc();
           });
            return allPerc;
        },

        getBudget : function(){
            return {
                budget : data.budget,
                totalInc :data.total.inc,
                totalExp : data.total.exp,
                percentage : data.percentage
            };
        },

        //test function for console use 
        testing : function(){
            console.log(data);
        }
     };

    

})();


var UIController = (function () {  

    var DOMString = {
        type : '.add__type',
        description : '.add__description',
        value : '.add__value' ,
        btn : '.add__btn',
        income : '.income__list',
        expense : '.expenses__list',
        budgetDisplay : '.budget__value',
        expenseDisplay : '.budget__expenses--value',
        incomeDisplay : '.budget__income--value',
        percentageDisplay : '.budget__expenses--percentage',
        container : '.container',
        expPercDis : '.item__percentage',
        DateYear : '.budget__title--month'
    };

    var FormatNumber = function (num, type){  
        var numSplit, int, dec, type;

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');
        int = numSplit[0];
        dec = numSplit[1];

        console.log(int.length);
        if(int.length > 3){
            int = int.substr(0, 1) + ',' +int.substr(1, 3);
        }

        return (type == 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

    };

    var NodeListForEach = function (list, callBack) {  
        for (var i = 0; i < list.length ; i++){
            callBack(list[i], i);
        }
    };

    var DisplayTime = function () {  
        var time,now;

        now = new Date();

        time = now.getHours() + ':' +now.getMinutes() + ':' +now.getMilliseconds();

        console.log(time);
        return time;

    }

    var DisplayDay = function () {  
        var day,now;

        now = new Date();
        months = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        day = now.getDay() + ' - ' + months[now.getMonth() - 1];

        console.log(day);
        return day;

    }


    return {                            
        getInput: function(){
            return {
                type : document.querySelector(DOMString.type).value,
                description : document.querySelector(DOMString.description).value,
                value : parseFloat(document.querySelector(DOMString.value).value)   
            };
        },

        addListItem : function (obj, type) {  
            var html;
            var newHtml;
            var element;

            //create a note for display the expenses and income details
            //sending HTML through the string
            if(type === 'inc'){
                element = DOMString.income;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%desc%</div> <div class="right clearfix"><div class="item__value">%val%</div><div class="item__timei">%day%</div><div class="item__timei">%time%</div><div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"> </i></button> </div> </div> </div>';
            }
            else if(type == 'exp'){
                element = DOMString.expense;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%desc%</div> <div class="right clearfix"><div class="item__value">%val%</div><div class="item__timee">%day%</div><div class="item__timee">%time%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replacing data %id% in html code with (obj.id)
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%desc%', obj.desc);
            newHtml = newHtml.replace('%val%', FormatNumber(obj.value, type));
            newHtml = newHtml.replace('%time%', DisplayTime());
            newHtml = newHtml.replace('%day%', DisplayDay());
            //console.log('id item : ' + obj.id);

            //sending the HTML code or render it on browser
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem : function(selectorID){
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields : function (){
            var field, fieldArr;

            field = document.querySelectorAll(DOMString.description + ', ' + DOMString.value);

            fieldArr = Array.prototype.slice.call(field);

            fieldArr.forEach(function(cur/*, index, array*/) {
                cur.value = "";
            });

            fieldArr[0].focus();
        },

        displayBudget : function (obj) {  

            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMString.budgetDisplay).textContent = FormatNumber(obj.budget, type);
            document.querySelector(DOMString.incomeDisplay).textContent = FormatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMString.expenseDisplay).textContent = FormatNumber(obj.totalExp, 'exp');
            
            if(obj.percentage > 0){
                document.querySelector(DOMString.percentageDisplay).textContent = obj.percentage + '%';
            }
            else{
                document.querySelector(DOMString.percentageDisplay).textContent = '--';
            }

        },

        DisplayPercentages : function(percentages){
            var fields = document.querySelectorAll(DOMString.expPercDis);

            
            NodeListForEach(fields, function(current, index){
                if(percentages[index] > 0){
                    current.textContent = percentages[index] + '%';
                }                
                else {
                    current.textContent = '---';
                }
            });


        },

        

        DisplayDate : function() {
            var months, month, year, now;
            
            now = new Date();

            months = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();

            year = now.getFullYear();

            document.querySelector(DOMString.DateYear).textContent = months[month - 1] + ' ' + year;
            
        },

        changeType : function() {
            var fields = document.querySelectorAll(
                DOMString.type  + ',' +
                DOMString.description + ',' +
                DOMString.value);

                NodeListForEach(fields, function(cur){
                    cur.classList.toggle('red-focus');
                });

                document.querySelector(DOMString.btn).classList.toggle('red');
        },

        getDOMStrings : function(){
            return DOMString;
        }
    };   
    
})();


//Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListener = function () {  
           
        var DOMS = UICtrl.getDOMStrings();

        //onClick event
        document.querySelector(DOMS.btn).addEventListener('click', ctrlItemAdd);

        //key press event (ENTER)
        document.addEventListener('keypress', function (event) {  

            if(event.keyCode === 13 || event.which === 13){
                ctrlItemAdd();
            }

        });

        document.querySelector(DOMS.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOMS.type).addEventListener('change', UICtrl.changeType);

    }
   

    var updateBudget = function(){

        budgetCtrl.calculateBudget();

        var budget = budgetCtrl.getBudget();
        //console.log(budget); 

        UICtrl.displayBudget(budget);

    }

    var updatePercentages = function(){
        // 1 calculate Percentages
        budgetCtrl.calculatePercentages();

        // 2 read percentages for budget contorller
        var Percentages = budgetCtrl.getPercentages();

        // 3 Update Percentages in UI
        //console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!! '+Percentages);
        UICtrl.DisplayPercentages(Percentages);

    }


    var ctrlItemAdd = function () {  

        var InputData, newInput;

        //console.log('key Press');
        InputData = UICtrl.getInput();
        
        //fetching New Item From UI controller
        //calling method budgetCtrl.addItem and passing required Data (type, desc, val)
        

        if(InputData.description !== '' && !isNaN(InputData.value) && InputData.value > 0){
            newInput = budgetCtrl.addItem(InputData.type, InputData.description, InputData.value);
            //console.log(newInput);
           
            UICtrl.addListItem(newInput, InputData.type);
           
            UICtrl.clearFields();
           
            updateBudget();

            updatePercentages();
        }
   
    }

    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;
              
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
       
        //console.log(itemID);
       
        if(itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
          
            // 1 delete Item from Data structure
            budgetCtrl.deleteItem(type, ID);
            // 2 delete item form UI
            UICtrl.deleteListItem(itemID);
            // 3 update and show the new budget
            updateBudget();
            //4 update budget percentages in UI
            updatePercentages();
        }
    }

    return {
        init : function () {  
        console.log('Application is Started..!!!');
        UICtrl.DisplayDate();
        UICtrl.displayBudget({
            budget : 0,
            totalInc :0,
            totalExp : 0,
            percentage : 0        
        });
        
        setupEventListener();
        }
    };

})(BudgetController, UIController);

controller.init();
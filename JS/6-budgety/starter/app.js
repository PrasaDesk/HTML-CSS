
var BudgetController = (function(){

    //constructor for Expense
    var expense = function(id, desc, value){
        this.id = id;
        this.desc = desc;
        this.value = value;
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
                 newItem = new expense(type, desc, value);
             }
             else if(type === 'inc'){
                 newItem = new income(type, desc, value);
             }

             //Adding new Item to Corresponding Array
             data.allItem[type].push(newItem);


             //return the new item
             return newItem;
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

        getBudget : function(){
            return {
                budget : data.budget,
                totalInc :data.total.inc,
                totalExp : data.total.exp,
                percentage : data.percentage
            };
        },

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
        percentageDisplay : '.budget__expenses--percentage'
    };

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
            //sending HTML through thi string
            if(type === 'inc'){
                element = DOMString.income;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%desc%</div> <div class="right clearfix"> <div class="item__value">+ %val%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"> </i></button> </div> </div> </div>';
            }
            else if(type == 'exp'){
                element = DOMString.expense;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%desc%</div> <div class="right clearfix"><div class="item__value">- %val%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replacing data %id% in html code with (obj.id)
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%desc%', obj.desc);
            newHtml = newHtml.replace('%val%', obj.value);

            //sending the HTML code or render it on browser
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields : function (){
            var field, fieldArr;

            field = document.querySelectorAll(DOMString.description + ', ' + DOMString.value);

            fieldArr = Array.prototype.slice.call(field);

            fieldArr.forEach(function(cur, index, array) {
                cur.value = "";
            });

            fieldArr[0].focus();
        },

        displayBudget : function (obj) {  
            document.querySelector(DOMString.budgetDisplay).textContent = obj.budget;
            document.querySelector(DOMString.incomeDisplay).textContent = obj.totalInc;
            document.querySelector(DOMString.expenseDisplay).textContent = obj.totalExp;
            
            if(obj.percentage > 0){
                document.querySelector(DOMString.percentageDisplay).textContent = obj.percentage + '%';
            }
            else{
                document.querySelector(DOMString.percentageDisplay).textContent = '--';
            }

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
    }
   

    var updateBudget = function(){

        budgetCtrl.calculateBudget();

        var budget = budgetCtrl.getBudget();
        console.log(budget);

        UICtrl.displayBudget(budget);

    }


    var ctrlItemAdd = function () {  

        var InputData, newInput;

        console.log('key Press');
        InputData = UICtrl.getInput();
        
        //fetching New Item From UI controller
        //calling method budgetCtrl.addItem and passing required Data (type, desc, val)
        

        if(InputData.description !== '' && InputData.value !== 0){
            newInput = budgetCtrl.addItem(InputData.type, InputData.description, InputData.value);
            console.log(newInput);
           
            UICtrl.addListItem(newInput, InputData.type);
           
            UICtrl.clearFields();
           
            updateBudget();
        }
   
    }

    var ctrlDeleteItem = function(event){
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID = splitID[1];
            
            // 1 delete Item from Data structure

            // 2 delete item form UI

            // 3 update and show the new budget
        }
    }

    return {
        init : function () {  
        console.log('Application is Started..!!!');
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
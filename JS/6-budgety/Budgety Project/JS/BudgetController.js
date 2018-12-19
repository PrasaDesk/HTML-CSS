

/****************************************************************************************
 * BudgetController 
 *
 * total constructor = 2
 * total function = 6   (addItem1, deleteItem1, calculateBudget1, calculatePercentages1,
 *                       getPercentages1, getBudget1)
 * 
 * return Object = reference to function 
 * *************************************************************************************/

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

     var addItem1 = function (type, desc, value) {  
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
    };

    var deleteItem1 = function(type, id) {
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
        
    };

    var calculateBudget1 = function () {  
        calculateTotal('exp');
        calculateTotal('inc');

        data.budget = data.total.inc - data.total.exp;

        if(data.total.inc > 0){
            data.percentage = Math.round((data.total.exp / data.total.inc ) * 100);
        }
        else{
            data.percentage = -1;
        }           

    };

    
    var calculatePercentages1 = function(cur){
        data.allItem.exp.forEach(function(cur){
            cur.calcPercentages(data.total.inc);
        });
    };

    var getPercentages1 = function(){
       var allPerc = data.allItem.exp.map(function(cur){
            return cur.getPerc();
       });
        return allPerc;
    };

    var getBudget1 = function(){
        return {
            budget : data.budget,
            totalInc :data.total.inc,
            totalExp : data.total.exp,
            percentage : data.percentage
        };
    };

     return {         
        fun : function(){
            return{               
                    addItem : addItem1,
                    deleteItem : deleteItem1,
                    calculateBudget :calculateBudget1,
                    calculatePercentages : calculatePercentages1,
                    getPercentages : getPercentages1,
                    getBudget : getBudget1,                  
            };
        },
        //test function for console use 
        /*testing : function(){
            console.log(data);
        }*/
     };

    

})();

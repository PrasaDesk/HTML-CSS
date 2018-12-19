
//Global App Controller
var controller = (function(budgetCtrl, UICtrl){

    var budgetCtrl = budgetCtrl.fun();
    var UICtrl = UICtrl.fun();

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
        
        var str = InputData.description;

        str = str.replace(/[^a-zA-Z ]/g, "");
        //console.log(str);
        str = str.trim();

        if(str !== '' && !isNaN(InputData.value) && InputData.value > 0){
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
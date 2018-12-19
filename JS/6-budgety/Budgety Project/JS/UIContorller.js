
/***********************************************************************************************
 * UIController
 * 
 * Total Function = 9 (getInput1, addListItem1, deleteListItem1, clearFields1, displayBudget1,
 *                     DisplayPercentages1, DisplayDate1, changeType1, getDOMStrings1) 
 * 
 * return Object = reference to all function
 * ********************************************************************************************/

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

        //console.log(int.length);
        if(int.length > 3){
            if(int.length == 5){
                int = int.substr(0, 2) + ',' +int.substr(2, 4);
            }
            else{
                int = int.substr(0, 1) + ',' +int.substr(1, 3);
            }            
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

        time = now.getHours() + ':' +now.getMinutes() + ':' +now.getSeconds();

        //console.log(time);
        return time;

    }

    var DisplayDay = function () {  
        var day,now;

        now = new Date();
        months = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        day = now.getDay() + ' - ' + months[now.getMonth() - 1];

        //console.log(day);
        return day;

    }

    var getInput1 = function(){
        return {
            type : document.querySelector(DOMString.type).value,
            description : document.querySelector(DOMString.description).value,
            value : parseFloat(document.querySelector(DOMString.value).value)   
        };
    };

    var addListItem1 = function (obj, type) {  
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
            html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%desc%</div> <div class="right clearfix"><div class="item__value">%val%</div><div class="item__percentage">21%</div><div class="item__timee">%day%</div><div class="item__timee">%time%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
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
    };

    var deleteListItem1 = function(selectorID){
        var el = document.getElementById(selectorID);
        el.parentNode.removeChild(el);
    };

    var clearFields1 = function (){
        var field, fieldArr;

        field = document.querySelectorAll(DOMString.description + ', ' + DOMString.value);

        fieldArr = Array.prototype.slice.call(field);

        fieldArr.forEach(function(cur/*, index, array*/) {
            cur.value = "";
        });

        fieldArr[0].focus();
    };

    var displayBudget1 = function (obj) {  

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

    };

    var DisplayPercentages1 = function(percentages){
        var fields = document.querySelectorAll(DOMString.expPercDis);

        
        NodeListForEach(fields, function(current, index){
            if(percentages[index] > 0){
                current.textContent = percentages[index] + '%';
            }                
            else {
                current.textContent = '---';
            }
        });


    };

    

    var DisplayDate1 = function() {
        var months, month, year, now;
        
        now = new Date();

        months = ['january', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        month = now.getMonth();

        year = now.getFullYear();

        document.querySelector(DOMString.DateYear).textContent = months[month - 1] + ' ' + year;
        
    };

    var changeType1 = function() {
        var fields = document.querySelectorAll(
            DOMString.type  + ',' +
            DOMString.description + ',' +
            DOMString.value);

            NodeListForEach(fields, function(cur){
                cur.classList.toggle('red-focus');
            });

            document.querySelector(DOMString.btn).classList.toggle('red');
    };

    var getDOMStrings1 = function(){
        return DOMString;
    };


    return {                            
        fun : function(){
            return{
                getInput : getInput1,
                addListItem : addListItem1,
                deleteListItem : deleteListItem1,
                clearFields : clearFields1,
                displayBudget : displayBudget1,
                DisplayPercentages : DisplayPercentages1,
                DisplayDate : DisplayDate1,
                changeType : changeType1,
                getDOMStrings : getDOMStrings1
            };
        }
    };   
    
})();


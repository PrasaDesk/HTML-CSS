var demo = function(){
    
    var fun2 = function(ans){
        console.log('Ans is '+ans);
    }
}

demo.prototype.fun1 = function(x, y){
    console.log(x ,y);
}

var contorller = function(){
    demo.fun1(10, 20);
}

contorller();
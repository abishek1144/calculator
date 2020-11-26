var x=document.getElementById("num1");
var y=document.getElementById("num2");
var cod=document.getElementById("abi");
var resultfield=document.getElementById("ans");

cod.addEventListener("submit",function(event){
    if(!x.value || !y.value){
        alert("Please enter the values")
    }
    else{
        x=parseFloat(x.value);
        y=parseFloat(y.value);
        var result=(x/y)*100;
        resultfield.innerText=result;
        event.preventDefault();
    }
    
})

var x1=document.getElementById("num3");
var y1=document.getElementById("num4");
var cod1=document.getElementById("abi1");
var resultfield1=document.getElementById("ans1");

cod1.addEventListener("submit",function(event){
    if(!x1.value || !y1.value){
        alert("Please enter the values")
    }
    else{
        x1=parseFloat(x1.value);
        y1=parseFloat(y1.value);
        var result1=x1+y1;
        resultfield1.innerText=result1;
        event.preventDefault();
    }
    
})


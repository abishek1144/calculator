var x=document.getElementById("num1");
var y=document.getElementById("num2");
var cod=document.getElementById("abi");
var resultfield=document.getElementById("ans");

cod.addEventListener("submit",function(event){
    if(!x.value || !y.value){
        alert("Please enter the values")
    }
    else{
        var a=parseFloat(x.value);
        var b=parseFloat(y.value);
        var result=(a/b)*100;
        resultfield.innerText=result;
        event.preventDefault();
    }
    
})

var x1=document.getElementById("num3");
var y1=document.getElementById("num4");
var resultfield1=document.getElementById("ans1");
var bn2=document.getElementById("btn2");
var bn3=document.getElementById("btn3");
var bn4=document.getElementById("btn4");
var bn5=document.getElementById("btn5");
var bn6=document.getElementById("btn6");
var bn7=document.getElementById("btn7");

bn2.addEventListener('click',function(event){
  if(!x1.value || !y1.value){
    alert("Please enter values in the field");
  }
  else{
    var a=parseFloat(x1.value);
    var b=parseFloat(y1.value);
    var result=a+b;

    resultfield1.innerHTML=result;
event.preventDefault();
  }

});

bn3.addEventListener('click',function(event){
  if(!x1.value || !y1.value){
    alert("Please enter values in the field");
  }
  else{
    var a=parseFloat(x1.value);
    var b=parseFloat(y1.value);
    var result=a-b;

    resultfield1.innerHTML=result;
event.preventDefault();
  }

});

bn4.addEventListener('click',function(event){
  if(!x1.value || !y1.value){
    alert("Please enter values in the field");
  }
  else{
    var a=parseFloat(x1.value);
    var b=parseFloat(y1.value);
    var result=a*b;

    resultfield1.innerHTML=result;
event.preventDefault();
  }

});

bn5.addEventListener('click',function(event){
  if(!x1.value || !y1.value){
    alert("Please enter values in the field");
  }
  else{
    var a=parseFloat(x1.value);
    var b=parseFloat(y1.value);
    var result=a/b;

    resultfield1.innerHTML=result;
event.preventDefault();
  }

});

bn6.addEventListener('click',function(event){
  if(!x1.value || !y1.value){
    alert("Please enter values in the field");
  }
  else{
    var a=parseFloat(x1.value);
    var b=parseFloat(y1.value);
    var result=a%b;

    resultfield1.innerHTML=result;
event.preventDefault();
  }

});

bn7.addEventListener('click',function(event){
  if(!x1.value || !y1.value){
    alert("Please enter values in the field");
  }
  else{
    var a=parseFloat(x1.value);
    var b=parseFloat(y1.value);
    var result=a**b;

    resultfield1.innerHTML=result;
event.preventDefault();
  }

});





function plus(){
    var input1 = document.getElementById('inp').value;
    var input2 = document.getElementById('pin').value;
    var num1 =  Number(input1);
    var num2 =  Number(input2);
    var a = num1+num2; 
    document.getElementById('demo').innerHTML = a;
}
function minus(){
    var input1 = document.getElementById('inp').value;
    var input2 = document.getElementById('pin').value;
    var num1 =  Number(input1);
    var num2 =  Number(input2);
    var a = num1-num2; 
    document.getElementById('demo').innerHTML = a;
}
function vur(){
    var input1 = document.getElementById('inp').value;
    var input2 = document.getElementById('pin').value;
    var num1 =  Number(input1);
    var num2 =  Number(input2);
    var a = num1*num2; 
    document.getElementById('demo').innerHTML = a;
}
function bol(){
    var input1 = document.getElementById('inp').value;
    var input2 = document.getElementById('pin').value;
    var num1 =  Number(input1);
    var num2 =  Number(input2);
    var a = num1/num2; 
    document.getElementById('demo').innerHTML = a.toFixed(2);
}
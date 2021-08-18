function phepCong() {
    let num1= document.getElementById("num1").value;
    num1 = parseInt(num1);
    let num2= document.getElementById("num2").value;
    num2 = parseInt(num2);

    let result = num1 + num2;
    document.getElementById("result").innerText = result;
}
function phepTru() {
    let num1= document.getElementById("num1").value;
    num1 = parseInt(num1);
    let num2= document.getElementById("num2").value;
    num2 = parseInt(num2);

    let result = num1 - num2;
    document.getElementById("result").innerText = result;
}

function phepNhan() {
    let num1= document.getElementById("num1").value;
    num1 = parseInt(num1);
    let num2= document.getElementById("num2").value;
    num2 = parseInt(num2);

    let result = num1 * num2;
    document.getElementById("result").innerText = result;
}
function phepChia() {
    let num1= document.getElementById("num1").value;
    num1 = parseInt(num1);
    let num2= document.getElementById("num2").value;
    num2 = parseInt(num2);

    let result = num1 / num2;
    document.getElementById("result").innerText =("Result :" + result) ;
}
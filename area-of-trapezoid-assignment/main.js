//Event Listener
document.getElementById('calc-btn').addEventListener('click', calcTotal)

//Event Functions
function calcTotal() {
    //Input
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);

    //Process
    let total =  1/2*(num1 + num2) * num3

    //Output
    document.getElementById('result').innerHTML = total;
}
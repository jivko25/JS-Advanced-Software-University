function subtract() {
    let num1 = Number(document.getElementById("firstNumber").value);
    let num2 = Number(document.getElementById("secondNumber").value);

    const result = num1 - num2;
    
    const resDiv = document.getElementById("result");

    resDiv.innerHTML = result.toString();
}
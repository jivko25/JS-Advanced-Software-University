function solve() {
  const input = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention");
  const result = document.getElementById("result");
  let resultString = "";
  if(convention.value == "Pascal Case"){
    const splittedText = input.toLowerCase().split(" ");
    for(let i = 0; i < splittedText.length; i++){
      resultString += splittedText[i][0].toUpperCase();
      resultString += splittedText[i].slice(1, splittedText[i].length);
    }
    result.textContent = resultString;
  }
  else if(convention.value == "Camel Case"){
    const splittedText = input.toLowerCase().split(" ");
    resultString += splittedText[0];
    for(let i = 1; i < splittedText.length; i++){
      resultString += splittedText[i][0].toUpperCase();
      resultString += splittedText[i].slice(1, splittedText[i].length)
    }
    result.textContent = resultString;
  }
  else{
    result.textContent = "Error!";
  }
}
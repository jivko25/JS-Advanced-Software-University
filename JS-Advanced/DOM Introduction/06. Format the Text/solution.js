function solve() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");

  const sentences = input.value.split(".");
  let completedSentences = 0;
  for(let i = 0; i < sentences.length; i++){
    if(sentences[i].length < 2){
      continue;
    }
    else{
      if(completedSentences % 3 == 0){
      let p = document.createElement("p");
      p.textContent = sentences[i]
      output.appendChild(p)
      }
      else{
      let p = document.querySelectorAll("p");
      p[p.length - 1].textContent += sentences[i];
      }
      completedSentences += 1;
    }
  }
}
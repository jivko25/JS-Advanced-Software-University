function create(words) {
   const content = document.getElementById("content");
   words.forEach(element => {
      const container = document.createElement("div");
      const text = document.createElement("p");
      text.textContent = element;
      container.appendChild(text);
      text.style.display = "none";
      container.addEventListener('click', onClick);
      content.appendChild(container);
   });

   function onClick(e) {
      e.target.querySelector("p").style.display = '';
   }
}
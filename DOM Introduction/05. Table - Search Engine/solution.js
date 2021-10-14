function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
     const items = Array.from(document.querySelectorAll("tbody tr"));
     const input = document.getElementById("searchField").value.toLowerCase();
     items.forEach(element => {
        let text = element.textContent.toLowerCase();
        if(text.includes(input)){
           element.classList.add("select");
        } else{
           element.classList.remove("select");
        }
     });
     document.getElementById("searchField").value = "";
   }
}
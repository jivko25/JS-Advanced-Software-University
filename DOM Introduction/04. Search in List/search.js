function search() {
   const items = document.getElementsByTagName("li");
   const searchedItem = document.getElementById("searchText");
   const result = document.getElementById("result");
   let matches = 0;
   for(let i = 0; i < items.length; i++){
      if(items[i].innerHTML.includes(searchedItem.value)){
         items[i].style.fontWeight = "bold";
         items[i].style.textDecoration = "underline";
         matches += 1;
      }
   }
   result.textContent = `${matches} matches found`
}

function addItem() {
    const menu = document.getElementById("menu");
    const text = document.getElementById("newItemText");
    const value = document.getElementById("newItemValue");

    const item = document.createElement("option");
    item.value = value.value;
    item.textContent = text.value;
    menu.appendChild(item);
    
    text.value = "";
    value.value = "";
}
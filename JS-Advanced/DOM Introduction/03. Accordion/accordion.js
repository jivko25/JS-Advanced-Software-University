function toggle() {
    const button = document.querySelector(".button");
    const textContainer = document.getElementById("extra");
    if(button.textContent == "Less"){
        button.textContent = "More";
        textContainer.style.display = "none";
    }
    else{
        button.textContent = "Less";
        textContainer.style.display = "block";
    }
}
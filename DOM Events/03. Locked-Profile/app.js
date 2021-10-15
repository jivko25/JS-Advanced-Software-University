function lockedProfile() {
    const profiles = document.querySelectorAll(".profile");
    // profiles.forEach(el => {
    //     el.querySelector("button").addEventListener('click', onClick);
    // })

    for(let i = 0; i < profiles.length; i++){
        // const isLocked = profiles[i].parentElement.querySelector('input[value="lock"]').checked;
        profiles[i].querySelector("button").addEventListener('click', onClick);
    }

    function onClick(e) {
        const isLocked = e.target.parentElement.querySelector('input[value="lock"]').checked;
        if(e.target.textContent == "Show more" && !isLocked)
        {
            e.target.textContent = "Hide it";
            e.target.parentElement.querySelector("div").style.display = 'block';
        }
        else if(!isLocked){
            e.target.textContent = "Show more";
            e.target.parentElement.querySelector("div").style.display = 'none'; 
        }
    }
}
window.addEventListener('load', solve);

function solve() {
    const genreInput = document.getElementById("genre");
    const nameInput = document.getElementById("name");
    const authorInput = document.getElementById("author");
    const dateInput = document.getElementById("date");
    const addButton = document.getElementById("add-btn");

    const hitsDiv = document.getElementsByClassName("all-hits-container");
    const savedDiv = document.getElementsByClassName("saved-container");

    addButton.addEventListener("click", addSong);

    function addSong(ev){
        ev.preventDefault();
        if(genreInput.value.trim() == '' || nameInput.value.trim() == '' || authorInput.value.trim() == '' || dateInput.value.trim() == ''){
            return
        }
        
        const songDiv = document.createElement('div');
        songDiv.classList.add("hits-info");
        songDiv.innerHTML = `
        <img src="./static/img/img.png">
        <h2>Genre: ${genreInput.value}</h2>
        <h2>Name: ${nameInput.value}</h2>
        <h2>Author: ${authorInput.value}</h2>
        <h3>Date: ${dateInput.value}</h3>`;

        const saveBtn = document.createElement('button');
        saveBtn.textContent = "Save song";
        saveBtn.classList.add("save-btn");
        songDiv.appendChild(saveBtn);

        const likeBtn = document.createElement('button');
        likeBtn.textContent = "Like song";
        likeBtn.classList.add("like-btn");
        songDiv.appendChild(likeBtn);

        likeBtn.addEventListener("click", like);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        songDiv.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", deleteSong);

        hitsDiv[0].appendChild(songDiv);

        saveBtn.addEventListener('click', save.bind(null, songDiv, likeBtn, saveBtn));

        genreInput.value = '';
        nameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';
    }

    function save(songDiv, likeButton, saveButton) {
        likeButton.remove();
        saveButton.remove();
        savedDiv[0].appendChild(songDiv);
    }

    function like(e){
        const likes = document.getElementsByClassName("likes")[0].getElementsByTagName("p")[0];
        const value = likes.textContent.split(" ");
        value[2] = Number(value[2]) + 1;
        likes.textContent = `Total Likes: ${value[2]}`;
        e.target.disabled = true;
    }

    function deleteSong(e){
        e.target.parentElement.remove();
    }
}
function solve() {
    const info = document.getElementById('info').querySelector('.info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    let url = 'http://localhost:3030/jsonstore/bus/schedule/depot';

    function depart() {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            info.textContent = `Next stop ${data.name}`;
        })
        

        departButton.disabled = true;
        arriveButton.disabled = false;
    }

    function arrive() {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            url = `http://localhost:3030/jsonstore/bus/schedule/${data.next}`;
            info.textContent = `Arriving at ${data.name}`;
        })

        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
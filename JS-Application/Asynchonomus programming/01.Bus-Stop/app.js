function getInfo() {
    const input = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const busesElement = document.getElementById('buses');
    fetch(`http://localhost:3030/jsonstore/bus/businfo/${input}`)
    .then(res => {
        if(!res.ok || input.trim() == ''){
            throw new Error("Error");
        };
        return res.json();
    })
    .then(data => {
        busesElement.replaceChildren();
        stopName.textContent = data.name;
        for(bus in data.buses){
            const li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            busesElement.appendChild(li);
        }
        })
    .catch(error => {
        busesElement.replaceChildren();
        stopName.textContent = 'Error';
    });
    input.value = '';
}
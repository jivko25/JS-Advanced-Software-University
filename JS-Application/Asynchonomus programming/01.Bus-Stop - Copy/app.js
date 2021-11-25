const select = document.getElementById('select');

fetch('https://api.exchangerate-api.com/v4/latest/bgn')
    .then(res => res.json())
    .then(data => {
        const propertyNames = Object.keys(data.rates);
        propertyNames.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            select.appendChild(option);
        })
    })

function getInfo() {
    let input = document.getElementById('stopId').value;
    const result = document.getElementById('stopName');
    const busesElement = document.getElementById('buses');
    const valuate = select.value;
    busesElement.replaceChildren();
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${valuate}`)
    .then(res => res.json())
    .then(data => {
        const regex = /\d{0,}\.?\d+ [A-Z]{3}/g
        const found = input.match(regex);
        found.forEach(element => {
            let arr  = element.split(' ');
            let rate = data.rates[arr[1]];
            arr[0] = (Number(arr[0]) / rate).toFixed(2);
            arr[1] = valuate;
            const res = arr.join(' ');
            const li = document.createElement('li');
            li.textContent = `${element} => ${res}`;
            busesElement.appendChild(li);
            input = input.replace(element, res);
        });
        console.log(input);
        result.textContent = input;
    });
    input.value = '';
}
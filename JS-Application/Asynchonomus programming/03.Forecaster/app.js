function attachEvents() {
    const button = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const weathers = {
        Sunny: '&#x2600', // ☀
        Partlysunny: '&#x26C5', // ⛅
        Overcast: '&#x2601', // ☁
        Rain: '&#x2614', // ☂
        Degrees: '&#176'   // °
        }
    button.addEventListener('click', () => {
        forecastDiv.style.display = 'block';
    })
}

attachEvents();
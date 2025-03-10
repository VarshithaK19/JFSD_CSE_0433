const apikey = {
    key: "2715f9fa0e22afb0199dad445be3a880",
    base: "https://api.openweathermap.org/data/2.5/weather"
};

const searchInput = document.querySelector('#city');
const searchButton = document.querySelector('#getWeather');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(searchInput.value);
});

function getWeather(city) {
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    fetch(`${apikey.base}?q=${city}&appid=${apikey.key}&units=metric`)
        .then(response => response.json())
        .then(data => showWeather(data))
        .catch(error => console.error("Error fetching weather data:", error));
}

function showWeather(data) {
    if (data.cod !== 200) {
        alert("City not found. Please enter a valid city name.");
        return;
    }

    document.getElementById('weatherInfo').innerHTML = `
        <h2>Weather Information for ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
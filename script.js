const apikey = "37481091eb15257b002730680b0d7c7e";

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(city)}&appid=${apikey}`;
    const response = await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
    document.getElementById('cityname').innerHTML = data.name;
    document.getElementById('cityname1').innerHTML = data.name;
    document.getElementById('temperature').innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById('feels_like').innerHTML = Math.round(data.main.feels_like) + "°C";
    document.getElementById('min_temp').innerHTML = Math.round(data.main.temp_min) + "°C";
    document.getElementById('max_temp').innerHTML = Math.round(data.main.temp_max) + "°C";
    document.getElementById('humidity').innerHTML = Math.round(data.main.humidity) + "%";
    document.getElementById('visibility').innerHTML = Math.round(data.visibility / 1000) + " km";
    document.getElementById('pressure').innerHTML = Math.round(data.main.pressure) + " hPa";
    document.getElementById('sealevel').innerHTML = data.main.grnd_level ? Math.round(data.main.grnd_level / 10) + " kPa" : "N/A";
    document.getElementById('wind_speed').innerHTML = Math.round(data.wind.speed) + " m/s";
    document.getElementById('wind_speed1').innerHTML = Math.round(data.wind.speed) + " m/s";
    document.getElementById('wind_degree').innerHTML = Math.round(data.wind.deg) + "°";
    document.getElementById('wind_gust').innerHTML = data.wind.gust ? Math.round(data.wind.gust) + " m/s" : "N/A";
    document.getElementById('city_lat').innerHTML = data.coord.lat + "°";
    document.getElementById('city_lon').innerHTML = data.coord.lon + "°";
}

// Default city on load
checkWeather('New Delhi');

// Add event listeners for all search buttons and inputs (desktop and mobile)
function setupSearchListeners() {
    const searchBtns = document.querySelectorAll('#search-nav-btn');
    const searchInputs = document.querySelectorAll('#search-navbar');
    searchBtns.forEach((btn, idx) => {
        const input = searchInputs[idx] || searchInputs[0];
        if (btn && input) {
            btn.addEventListener('click', function() {
                const city = input.value.trim();
                if (city) {
                    checkWeather(city);
                }
            });
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    btn.click();
                }
            });
        }
    });
}
setupSearchListeners();
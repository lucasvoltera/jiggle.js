const mockWeatherData = {
    "New York": {
        temperature: 300,
        humidity: 50,
        description: "Sunny",
    },

    "London": {
        temperature: 290,
        humidity: 70,
        description: "Rainy",
    },

    "Tokyo": {
        temperature: 310,
        humidity: 80,
        description: "Cloudy",
    },

}


let state = reactive({
    selectedCity: 'London',
    weather: {
        temperature: 'N/A',
        humidity: 'N/A',
        description: 'N/A',
    },
});

function updateWeather(city) {
    const weatherData = mockWeatherData[city];
    state.weather = weatherData;
    state.selectedCity = city;
    // renderApp();
}

async function fetchWeather(city) {
    await updateWeather(city);
}


function renderApp() {
    render('#container', `<select onChange=updateSelectedCity(this.value)>
            <option value="Tokyo">Tokyo</option>
            <option value="London">London</option>
            <option value="New York">New York</option>
        
        </select>
        <div>
            <p>Temperature: ${state.weather.temperature}</p>
            <p>Humidity: ${state.weather.humidity}</p>
            <p>Description: ${state.weather.description}</p>

        </div>
        `);
}

renderApp()

function updateSelectedCity(city) {
    state.selectedCity = city
    fetchWeather(city)
}

const timeout = 2000; // 2 seconds
setTimeout(() => {
    state.message = 'Hello, universe!'
}, timeout);
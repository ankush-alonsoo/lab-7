const apikey = 'adbb3c03b656f48d726eb975eaaf5b0a';

const search = document.getElementById('search');
const result = document.getElementById('result');

search.addEventListener('click', getDetails);

async function getDetails(event) {
    const city = document.getElementById('city').value.trim();
    if (city === "") {
        alert("Please enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (response.ok) {
            result.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind speed: ${data.wind.speed} m/s</p>
                <p>Weather description: ${data.weather[0].description}</p>
            `;
        } else {
            result.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
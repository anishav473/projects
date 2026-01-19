const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

const mockData = {
  agra: {
    temp: 32,
    weather: "Clear Sky",
    humidity: 40
  },
  delhi: {
    temp: 35,
    weather: "Haze",
    humidity: 50
  },
  mumbai: {
    temp: 29,
    weather: "Cloudy",
    humidity: 70
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const city = cityInput.value.toLowerCase().trim();
  weatherInfo.innerHTML = "<p>Loading...</p>";

  setTimeout(() => {
    if (!mockData[city]) {
      weatherInfo.innerHTML = "<p>City not found</p>";
      return;
    }

    const data = mockData[city];

    weatherInfo.innerHTML = `
      <h2>${city.toUpperCase()}</h2>
      <p>🌡 Temperature: ${data.temp} °C</p>
      <p>☁ Weather: ${data.weather}</p>
      <p>💧 Humidity: ${data.humidity}%</p>
    `;
  }, 1000);
});

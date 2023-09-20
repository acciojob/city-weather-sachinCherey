import React, { useEffect, useState } from "react";
import './../styles/App.css';

const API_KEY = "5cda408868102eddd87731d415f81a39";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setWeatherData(data);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  };

  return (
    <div>
      <div className="search">
        <input
          type='text'
          placeholder="Enter a City"
          value={city}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="weather">
        {weatherData && (
          <div>
            <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
            <p>Temperature: {weatherData.main.temp} °K</p>
            {/* Add more weather information as needed */}
          </div>
        )}
      </div>
    </div>
  )
}

export default App;

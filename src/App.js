// import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const fetchWeather = async () => {
    try{
      setError("");
      setWeather(null);
      const response = await fetch(
         `https://geocoding-api.open-meteo.com/v1/search?name=${city}` //here searching for a city.
      );
      const data = await response.json();
      if(!data.results || data.results.length === 0){
        setError("city not found! Please try to check with another city name."); 
        //if city not found what you have searched you can observe this error msg in red color.
        return;
      }
      const {latitude, longitude} = data.results[0];
      const weatherResponse = await fetch(
       `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true` 
       //if city found it search for present weather condition data and display.
      );
      const weatherData = await weatherResponse.json();
      setWeather(weatherData.current_weather);
    }catch(err){
     setError("Error fetching weather data. Please try again.");
    }
  };
  return (
    <div className="app">
      <h1>Present Weather Report</h1>
      <div className="search-box">   
        <input
          type="text"
          // search for a city, type here, by clicking 'Get Weather' button it fetch the city data.
          placeholder="Enter city name..." 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
         {/* by clicking on button it goes to fetchWeather function it search the data. */}
      </div>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className ="weather-card"> 
        {/* here you can observe weather data of particular city.  */}
          <h2>Temperature: {weather.temperature}°C</h2> 
          <p>Wind Speed: {weather.windspeed} km/h</p>
          <p>Weather Code: {weather.weathercode}</p>
        </div>
      )}
    </div>
  );
}

export default App;








//  <p>Welcome, Jamie! Check the current weather for any city.</p> 
//        <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> 
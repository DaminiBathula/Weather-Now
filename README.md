# Weather-Now
This is my Reactjs Weather app.
-------------------------------------------------------------------------------
User Persona:
● Name: Jamie
● Occupation: Outdoor Enthusiast
● Need: Jamie wants to check the current weather conditions quickly for any city.
Use:
● Open-Meteo API.
Style:
● CSS/Tailwind
--------------------------------------------------------------------------------
Used state Management {useState} ,To manage dynamic data.
● Search Weather By city name.
It Displays the
● Temperature (°C)
● Air (wind) speed (km/h)
● weather code
→ Handles invalid city searches gracefully
→ Responsive design (works on mobile & desktop)
--------------------------------------------------------------------------------
Working:-
● Enter a city name in input box.
● App calls the "Geocoding API" to get that city latitude and longitude.
   → https://geocoding-api.open-meteo.com/v1/search?name=${city}
● Then, it calls the "Weather Forecast API using those coordinates.
   → https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true
● Now App displays the city "Temperature, Wind Speed, Weather Code" on the screen.
---------------------------------------------------------------------------------
Weather Code Meaning
0	Clear sky ☀️
1	Mainly clear 🌤️
2	Partly cloudy ⛅
3	Overcast ☁️
45	Fog 🌫️
48	Depositing rime fog 🌫️
51	Light drizzle 🌦️
53	Moderate drizzle 🌦️
55	Dense drizzle 🌧️
61	Slight rain 🌧️
63	Moderate rain 🌧️
65	Heavy rain 🌧️🌧️
71	Slight snow fall ❄️
73	Moderate snow fall ❄️❄️
75	Heavy snow fall ❄️❄️❄️
80	Rain showers 🌦️
95	Thunderstorm ⛈️
99	Hailstorm 🌩️
---------------------------------------------------------------------------------

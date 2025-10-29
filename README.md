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


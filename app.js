document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value.trim();
    if (!city) {
      alert('Please enter a city name');
      return;
    }
  
    const apiKey = "53cfed61dc9150d5fcb3750dfee5cf57"; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      console.log(response);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      console.log(data)
  
      document.getElementById('location').textContent = `Location: ${data.name}, ${data.sys.country}`;
      document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
      document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
    } catch (error) {
      console.log(error)
      alert(error.message);
    }
  });
  
let input = document.querySelector("#search");
let btn = document.querySelector("#btn-1");




let apiKey = "729551d422c944a7883193645260703";
const weather = async () => {
  try {
    let city = input.value;

    if(city === ""){
      alert("Please enter city name.");
      return;
    }

    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    let response = await fetch(url);
    let data = await response.json();

    document.getElementById("cityName").innerText = data.location.name;

    document.getElementById("temp").innerText = data.current.temp_c + "°C";

    document.getElementById("humidity").innerText = "Humidity: " + data.current.humidity + "%";

    document.getElementById("wind").innerText = "Wind: " + data.current.wind_kph + " km/h";

    document.getElementById("condition").innerText =
      data.current.condition.text;

    document.getElementById("icon").src ="https:" + data.current.condition.icon;

  } 
  
  catch (error) {
    console.log("Error fetching weather:", error);

    alert("Unable to fetch weather data");
  }
};

btn.addEventListener("click", weather); 
let weather = {
  apiKey: "59d3d981f3adae60e7f568aaf63047a2",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const {speed} = data.wind;
    console.log(name,icon,description,temp,humidity,speed)
  document.querySelector(".city").innerText = " Weather in " + name;
  document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
  document.querySelector(".desc").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind Speed: "+ speed + " Km/h";
},
};
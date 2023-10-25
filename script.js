const searchbarInput =  document.querySelector(".search-bar input");
const searchbarBtn = document.querySelector(".search-bar button");
const image = document.querySelector(".icon");


//fetch API from openweathermap
async function getWeather(city){
let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=59962cf7f4f23dda900ed8cd9ebc4d72&&units=metric`);

//display invalid city name
if(result.status == 404){
  document.querySelector(".error").style.display = "block";
} else{
  document.querySelector(".error").style.display = "none";
}

let data = await result.json();
console.log(data);
document.querySelector('.degree').innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector('.city').innerHTML = data.name;
document.querySelector('.humidityPercentage').innerHTML = Math.round(data.main.humidity) + "%";
document.querySelector('.windSpeed').innerHTML =Math.round(data.wind.speed) + "k/h";

if(data.weather[0].main == "Clouds"){
image.src = "./pictures/cloud.png"
} else if(data.weather[0].main == "Clear"){
image.src = "./pictures/clear.png"
} else if (data.weather[0].main == "Rain"){
image.src = "./pictures/rain.png"
} else if (data.weather[0].main == "Drizzle"){
image.src = "./pictures/drizzle.png"
} else if (data.weather[0].main == "Mist"){
image.src = "./pictures/mist.png"
} 
}

searchbarBtn.addEventListener('click', () => {
getWeather(searchbarInput.value);
})

getWeather();
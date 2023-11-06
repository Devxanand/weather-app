const apiUrl="https://api.openweathermap.org/data/2.5/weather?q="
const apiKey ="7c323074489f7f1f5a195c8fe7fa7feb"
const temp = document.querySelector(".temp")
const cityElement = document.querySelector(".city")
const percent = document.querySelector(".percent")
const speed = document.querySelector(".speed")
const searchBox = document.querySelector(".searchBox")
const search = document.querySelector(".searchBox input")
const searchBtn = document.querySelector(".searchBox button")
const weatherIcon = document.querySelector(".weatherIcon")

async function changeWeather(cityName){

    const responce = await fetch(apiUrl + cityName +`&appid=${apiKey}`);
    if(responce.status == 404){
        alert("Please Enter valid city name")
        search.value=""
    }
    else{
        var data = await responce.json();
        console.log(data)
        cityElement.innerHTML=data.name;
        temp.innerHTML = Math.round(data.main.temp-273)+("°C");
        percent.innerHTML = data.main.humidity+("%");
        speed.innerHTML = data.wind.speed+("Km/h");
        updateWeatherIcon(data.weather[0].main);
        search.value=""
    }

   
}
function updateWeatherIcon(weatherMain){
    if(weatherMain ==="Clouds"){
        weatherIcon.src="/images/clouds.png"
    }
    else if(weatherMain === "Fog"){
        weatherIcon.src="/images/mist.png"
    }
    else if(weatherMain === "Rain"){
        weatherIcon.src="/images/rain.png"
    }
    else if(weatherMain === "Drizzle"){
        weatherIcon.src="/images/drizzle.png"
    }
    else if(weatherMain === "Snow"){
        weatherIcon.src="/images/snow.png"
    }
    else if(weatherMain === "Clear"){
        weatherIcon.src="/images/clear.png"
    }
    else if(weatherMain === "Humidity"){
        weatherIcon.src="/images/humidity.png"
    };

}

searchBox.addEventListener("submit", (event) => {
    event.preventDefault(); 
    changeWeather(search.value);
});


search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        changeWeather(search.value);
    }
});

changeWeather("Hazaribagh");

setInterval( ()=>{
    changeWeather("Hazaribagh");
},900000);
// else if(data.)

searchBtn.addEventListener("click", ()=>{
    changeWeather(search.value)
})





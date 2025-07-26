const inputbox = document.querySelector('.input-box')
const searchbutton = document.getElementById('searchbtn')
const weather_image = document.querySelector('.weather-image')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const humidity = document.getElementById('humidity')
const wind_speed = document.getElementById('wind-speed')
const location_not_found = document.querySelector('.location-not-found')
const weather_body = document.querySelector('.weather-body')

async function checkWeather(city){
    const api_key = 'ca539b78c9b2a0bd9831d72c69a6253f'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then(response => response.json())

    if(weather_data.cod === '404'){
        location_not_found.style.display = "flex"
        weather_body.style.display = "none"
        return;
    }
    else{
        location_not_found.style.display = "none"
        weather_body.style.display = "flex"
    }
    console.log(weather_data);
    temperature.innerHTML = `${Math.round(weather_data.main.temp)-273}°C`
    description.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML =`${weather_data.main.humidity}%`
    wind_speed.innerHTML = `${Math.round(weather_data.wind.speed)*1.609}Km/H.`
    
    

    switch(weather_data.weather[0].main){
        case "Clouds":
            weather_image.src = "assests/cloud.png"
            break;

        case "Clear":
            weather_image.src = "assests/clear.png"
            break;

        case "Mist":
            weather_image.src = "assests/mist.png"
            break;

        case "Rain":
            weather_image.src = "assests/rain.png"
            break;

        case "Snow":
            weather_image.src = "assests/snow.png"
            break;
    }

    
}
searchbutton.addEventListener('click',function(){
    checkWeather(inputbox.value)
})


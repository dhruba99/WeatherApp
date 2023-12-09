
const apiKey = "0df3cf37b84de6254f7a821a6cca8390";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherBox = document.querySelector('.weather');



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    searchBox.value="";
    console.log(data);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        weatherBox.style.display = 'none';
    } else {
        //updating data
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";


        //updating wather icon
        const weatherImg = document.querySelector('.weather-icon');

        const curDate = new Date();
        const hour = curDate.getHours();
        
        if(hour>=18 || hour<4){ //night between 6pm to 4am
            if(data.weather[0].main == "Clear"){
                weatherImg.src = "animated/night.svg";
            }
            else if(data.weather[0].description =="few clouds"){
                weatherImg.src = "animated/partly-cloudy-night.svg";
            }
            
            else if(data.weather[0].description =="scattered clouds"){
                weatherImg.src = "animated/scatterted_clouds.svg";
            }
            else if(data.weather[0].description =="broken clouds"){
                weatherImg.src = "animated/cloudy-night-1.svg";
            }
            else if(data.weather[0].description =="overcast clouds"){
                weatherImg.src = "animated/overcast-night.svg"; 
            }
            else if(data.weather[0].description =="smoke"){
                weatherImg.src = "animated/partly-cloudy-night-smoke.svg";
            }
            else if(data.weather[0].description =="heavy intensity rain"){
                weatherImg.src = "animated/rain.svg";
            }
            
            else if(data.weather[0].description =="light rain"){
                weatherImg.src = "animated/Light rain night.svg";
            }

            else if(data.weather[0].description =="moderate rain"){
                weatherImg.src = "animated/partly-cloudy-night-rain.svg";
            }
            else if(data.weather[0].description =="light snow"){
                weatherImg.src = "animated/partly-cloudy-night-snow.svg";
            }
            else if(data.weather[0].main =="Snow"){
                weatherImg.src = "animated/snow.svg"; 
            }

            else if(data.weather[0].main =="Haze"){
                weatherImg.src = "animated/haze-night.svg"; 
            }
            
            else if(data.weather[0].main =="Drizze"){
                weatherImg.src = "animated/partly-cloudy-night-drizzle.svg"; 
            }

        }
        else{//day between 4am to 6pm
            if(data.weather[0].main == "Clear"){
                weatherImg.src = "animated/day.svg";
            }
            else if(data.weather[0].description =="few clouds"){
                weatherImg.src = "animated/partly-cloudy-day.svg";
            }

            else if(data.weather[0].description =="scattered clouds"){
                weatherImg.src = "animated/scatterted_clouds.svg";
            }

            else if(data.weather[0].description =="broken clouds"){
                weatherImg.src = "animated/cloudy-day-1.svg";
            } 

            else if(data.weather[0].description =="smoke"){
                weatherImg.src = "animated/partly-cloudy-day-smoke.svg";
            }

            else if(data.weather[0].description =="light rain"){
                weatherImg.src = "animated/light-rain-day.svg";
            }
            
            else if(data.weather[0].description =="heavy intensity rain"){
                weatherImg.src = "animated/rain.svg";
            }   
            else if(data.weather[0].description =="moderate rain"){
                weatherImg.src = "animated/partly-cloudy-day-rain.svg";
            }
            else if(data.weather[0].description =="light snow"){
                weatherImg.src = "animated/partly-cloudy-day-snow.svg";
            }
            
            else if(data.weather[0].main =="Snow"){
                weatherImg.src = "animated/snow.svg"; 
            }

            else if(data.weather[0].main =="Haze"){
                weatherImg.src = "animated/haze-day.svg"; 
            }
            else if(data.weather[0].description =="overcast clouds"){
                weatherImg.src = "animated/overcast-day.svg"; 
            }
            else if(data.weather[0].main =="Drizzle"){
                weatherImg.src = "animated/partly-cloudy-night-drizzle.svg"; 
            }


        }


        //setting description
        const desc = data.weather[0].description;
        document.querySelector('.desc').innerHTML= data.weather[0].main + " - " + desc.charAt(0).toUpperCase() + desc.slice(1);
        
        //displaying weather box an d hiding error msg
        document.querySelector('.error').style.display = 'none';
        weatherBox.style.display = 'block';

    }
}

searchBox.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        checkWeather(searchBox.value);
    }
});

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
    
});




var weather = 
{
    apiKey : "389b7ee646dcc99a311aefb48b7d414b",
    fetchWeather : function (city)
    {
        fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerText = temp +"°C";
        document.querySelector(".humidity").innerHTML = 'Humidity : ' + humidity +"%";
        document.querySelector(".wind").innerHTML = "Wind Speed : " + speed +" km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/? " + description + " ' )"
    },
    search: function()
    {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document
    .querySelector(".search")
    .addEventListener("click", function(){
        weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup" , function(event){
    if(event.key == "Enter")
    {
        weather.search();
    }
})
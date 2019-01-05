
// weather info
var weatherDiv = $(this).attr("data-name");
var apiKey = "ba122f6f24a75e9797130a923242d144";

var resort = "";

//#region 


function getWeather(search){
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?"+ search + "&units=imperial&APPID=" + apiKey;

  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      console.log(response);
  
        $("#weather-head").html("<h4>Weather Information for " + response.name + " </h4>");
        $("#description").text("Current Conditions: " + response.weather[0].description);
        $("#current-temp").text("Temperature: " + response.main.temp + "(F)");
        $("#wind").text("Wind Speed: " + response.wind.speed + "mph");
        $("#max-min").text("Hi: " + response.main.temp_max + " Lo: " + response.main.temp_min);
  
      });
}

$("#alta").on("click", function(){
  getWeather("lat=40.5888&lon=-111.6552");
})

$("#snowbird").on("click", function(){
  getWeather("lat=40.5819&lon=-111.6552");
})

$("#brighton").on("click", function(){
  getWeather("lat=40.5980&lon=-111.5832");
})

$("#park-city").on("click", function(){
  getWeather("lat=40.6461&lon=-111.4980");
})

$("#deer-valley").on("click", function(){
  getWeather("lat=40.6374&lon=-111.4783");
})

$("#solitude").on("click", function(){
  getWeather("lat=40.6211&lon=-111.5933");
})

//#endregion




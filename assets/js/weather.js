
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
  
        // $("#weather-head").html("<h4>Weather Information for " + response.name + " </h4>");
        $("#description").html("<strong>Current Conditions:</strong> " + response.weather[0].main +
         " " + "<img src='http://openweathermap.org/img/w/" + response.weather[0].icon +".png'>");

        $("#current-temp").html("<strong>Temperature:</strong> " + response.main.temp + "&deg; F");
        $("#wind").html("<strong>Wind Speed:</strong> " + response.wind.speed + "mph");
        $("#max-min").html("<strong>Hi:</strong> " + response.main.temp_max + " <strong>Lo:</strong> " + response.main.temp_min);
  
      });
}

$("#alta").on("click", function(){
  getWeather("lat=40.5888&lon=-111.6552");
  $("#weather-head").html("<h4>Weather Information for " + "Alta </h4>");
})

$("#snowbird").on("click", function(){
  getWeather("lat=40.5819&lon=-111.6552");
  $("#weather-head").html("<h4>Weather Information for " + "Snowbird </h4>");

})

$("#brighton").on("click", function(){
  getWeather("lat=40.5980&lon=-111.5832");
  $("#weather-head").html("<h4>Weather Information for " + "Brighton </h4>");

})

$("#park-city").on("click", function(){
  getWeather("lat=40.6461&lon=-111.4980");
  $("#weather-head").html("<h4>Weather Information for " + "Park City </h4>");

})

$("#deer-valley").on("click", function(){
  getWeather("lat=40.6374&lon=-111.4783");
  $("#weather-head").html("<h4>Weather Information for " + "Deer Valley </h4>");

})

$("#solitude").on("click", function(){
  getWeather("lat=40.6211&lon=-111.5933");
  $("#weather-head").html("<h4>Weather Information for " + "Solitude </h4>");

})

//#endregion




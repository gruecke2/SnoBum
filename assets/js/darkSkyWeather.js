
// weather info
var weatherDiv = $(this).attr("data-name");
var apiKey = "ba122f6f24a75e9797130a923242d144";



function getWeather(search){
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?"+ search + "&units=imperial&APPID=" + apiKey;

  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      console.log(response);
  
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".description").text("Current Conditions: " + response.weather[0].description);
        $(".temp").text("Temperature (F) " + response.main.temp);
  
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
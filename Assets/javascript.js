
// weather info
var weatherDiv = $(this).attr("data-name");
var apiKey = "ba122f6f24a75e9797130a923242d144";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Alta,Utah&APPID=" + apiKey;


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

      $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp").text("Temperature (F) " + response.main.temp);

    });


var lat;
var UVIndex;
var lon;
var searchHist = [];
var cityName;

renderHistory()

function citySearch(event){

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=7fc7f03995684de46975fc5859c4770c"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        $("#cityTitle").text(cityName);

        // $("#icon").append(response.list[0].weather[0].icon);

        var tempCels = response.list[0].main.temp - 273;
        var tempFar = ((tempCels*9/5) + 32).toFixed(2);
        $("#tempBox").text("Temperature: " + tempFar + "\u00B0 F");

        var humidity = response.list[0].main.humidity;
        $("#humidityBox").text("Humidity: " + humidity + "%");

        var windSpeed = response.list[0].wind.speed;
        $("#windSpeedBox").text("Wind Speed: " + (windSpeed * 2.237).toFixed(2) + "mph");

        lat = response.city.coord.lat;

        lon = response.city.coord.lon;

        var latLon = "lat=" + lat + "&lon=" + lon;
        console.log(latLon);

        var UVqueryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=7fc7f03995684de46975fc5859c4770c&" + latLon;
        console.log(UVqueryURL);

        $.ajax({
            url: UVqueryURL,
            method: "GET"
        }).then(function(UVResponse){
        console.log(UVResponse);

        UVIndex = parseFloat(UVResponse.value);

        console.log(UVIndex);

        $("#UVBox").text(UVIndex);

        if(UVIndex <= 2){
           $("#UVBox").css("background-color", "green");
        }
        else if(UVIndex <= 5){
            $("#UVBox").css("background-color", "yellow");
        }
        else if(UVIndex <= 7){
            $("#UVBox").css("background-color", "orange");
        }
        else if(UVIndex <= 10){
            $("#UVBox").css("background-color", "red");
        }
        else if(UVIndex > 10){
            $("#UVBox").css("background-color", "magenta");
        }

        })
    })

    localStorage.setItem("HistoryList", JSON.stringify(searchHist));
}

function renderHistory(){
    $("#histBox").empty();
    localHist = localStorage.getItem("HistoryList")
    searchHist = JSON.parse(localHist);
    if(searchHist){
        for(i=(searchHist.length-1); i>-1; i--){
            var newButton = $("<button>");
            newButton.text(searchHist[i]);
            newButton.addClass("histCell");
            $("#histBox").append(newButton);
        }
    }
    else{searchHist = []};
}

$("#searchButton").on("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    cityName = $("#cityInput").val().trim();
    searchHist.push(cityName);
    citySearch();
    renderHistory();
});

$(document).on("click", ".histCell", function(){
    cityName = $(this).text();
    citySearch();
})
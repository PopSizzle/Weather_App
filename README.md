# Weather API Search

This app will allow the user to search a public weather API and will give them information on the current weather in the city of their choice. It will be updated live and will show the weather for the next 5 days as well. The site will record past search history in the local storage and will keep those options up so that the user may click on the past cities and instantly see the data for that location.

## Implementation

This app was built using jQuery to reach out to openweathermap.org and there retrieving public information on the weather in a given city. The temperature, wind speed, and humidity were found from the first AJAX call and will be displayed for the current city. This was done using an AJAX call, as demonstrated below:

```
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=7fc7f03995684de46975fc5859c4770c"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
```

This process will refresh and do a new AJAX call each time a city name is typed into the search bar. A second AJAX call was required to get the UV index for the city, which will be displayed in a color coded box matching the EPA offical safety color of each UV Index number.

The functional website will let the user plan their travels to other cities, learn what the weather will soon be like in the current city, or just check the conditions in any city in the world.


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* [See Live Site](https://popsizzle.github.io/Weather_App/)


## Author

* Sam Poppe

- [Link to Github](https://github.com/PopSizzle)
- [Link to LinkedIn](https://www.linkedin.com/in/sam-poppe-623281193/) 

## Acknowledgments

* Thanks to my teacher Jerome Chenetter and my TAs Mahisha Gunasekaran and Kerwin Hy for their help in teaching me the subject matter I used in creating this app!

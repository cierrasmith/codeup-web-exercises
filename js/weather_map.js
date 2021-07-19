"use strict"
$(document).ready(function () {

    mapboxgl.accessToken = mapboxAPIKey
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 10,
        center: [-98.4936, 29.4241]
    });

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4936, 29.4241])
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        console.log(lngLat);
        newWeather(lngLat.lat, lngLat.lng);
    }

    marker.on('dragend', onDragEnd);
    var lat = 29.4252;
    var lon = -98.4916;

    function newWeather(coord1, coord2) {
        $.get(`https://api.openweathermap.org/data/2.5/onecall`, {
            appid: openWeatherAPIKey,
            lat: coord1,
            lon: coord2,
            units: "imperial"
        }).done(function (data) {

            $("#weather-card-col").html("");
            data.daily.forEach(function (day, index) {
                if (index < 5) {
                    console.log(day);

                    var weatherCard = `
                    <div class="column" id="weather-card-col">
                        <div class="card" style="width: 18rem;">
                            <div class="card-header">
                                ${new Date(day.dt * 1000).toLocaleDateString()}
                            </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" id="temp">${day.temp.morn} / ${day.temp.night}</li>
                            <li class="list-group-item">Description: ${day.weather[0].description}</li>
                            <li class="list-group-item">Humidity: ${day.humidity}</li>
                            <li class="list-group-item">Wind: ${day.wind_speed}</li>
                            <li class="list-group-item">Pressure: ${day.pressure}</li>
                        </ul>
                    </div>`
                    $("#weather-card-col").append(weatherCard);
                }
            })
        })
    }
    newWeather(lat, lon);
});

// var day1 = data.daily[0];
// console.log(day1);
// $("#day1-temp").text(day1.temp.day);
// $("#day1-description").text("Description: "+day1.weather[0].description);
// $("#day1-humidity").text("Humidity: "+day1.humidity);
// $("#day1-wind").text("Wind: " +day1.wind_speed);
// $("#day1-pressure").text("Pressure: "+day1.pressure);
//
// var day2 = data.daily[1];
// $("#day2-temp").text(day2.temp.day);
// $("#day2-description").text("Description: "+day2.weather[0].description);
// $("#day2-humidity").text("Humidity: "+day2.humidity);
// $("#day2-wind").text("Wind: "+day2.wind_speed);
// $("#day2-pressure").text("Pressure: "+day2.pressure);
//
// var day3 = data.daily[2];
// $("#day3-temp").text(day3.temp.day);
// $("#day3-description").text("Description: "+day3.weather[0].description);
// $("#day3-humidity").text("Humidity: "+day3.humidity);
// $("#day3-wind").text("Wind: "+day3.wind_speed);
// $("#day3-pressure").text("Pressure: "+day3.pressure);
//
// var day4 = data.daily[3];
// $("#day4-temp").text(day4.temp.day);
// $("#day4-description").text("Description: "+day4.weather[0].description);
// $("#day4-humidity").text("Humidity: "+day4.humidity);
// $("#day4-wind").text("Wind: "+day4.wind_speed);
// $("#day4-pressure").text("Pressure: "+day4.pressure);
//
// var day5 = data.daily[4];
// $("#day5-temp").text(day5.temp.day);
// $("#day5-description").text("Description: "+day5.weather[0].description);
// $("#day5-humidity").text("Humidity: "+day5.humidity);
// $("#day5-wind").text("Wind: "+day5.wind_speed);
// $("#day5-pressure").text("Pressure: "+day5.pressure);




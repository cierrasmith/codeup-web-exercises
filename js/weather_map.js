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

    // var searchButton = document.getElementById("search-button");
    // var searchInput = document.getElementById("search-input");
    //
    // searchButton.addEventListener('click', () => {
    //     const inputValue = searchInput.value;
    //     alert(inputValue);
    // })
});





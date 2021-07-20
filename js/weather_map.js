"use strict"
$(document).ready(function () {

    var lat = 29.4252;
    var lon = -98.4916;

    mapboxgl.accessToken = mapboxAPIKey
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 10,
        center: [lon, lat]
    });

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        marker
        .setLngLat([lon, lat])
        .addTo(map);

    newWeather();


    function newWeather() {
        $.get(`https://api.openweathermap.org/data/2.5/onecall`, {
            appid: openWeatherAPIKey,
            lat: lat,
            lon: lon,
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
                            <li class="list-group-item" id="temp">${day.temp.morn} F&#176; / ${day.temp.night} F&#176;</li>
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

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        console.log(lngLat);
        newWeather(lngLat.lat, lngLat.lng);
        lon = longLat.lng;
        lat = longLat.lat;
        newWeather();
    }

    marker.on('dragend', onDragEnd);

    var longLat;

    $("#search-button").click(function (e) {
        e.preventDefault();
        var address = $("#search-input").val();
        longLat = marker.getLngLat();
        console.log(address);

        geocode(address, mapboxAPIKey).then(function (result) {
            console.log(result);
            lon = result[0];
            lat = result[1];

            marker
                .setLngLat([lon, lat]);
            map.flyTo({
                center: [lon, lat],
                essential: true
            })
        });
        newWeather();

    });


});





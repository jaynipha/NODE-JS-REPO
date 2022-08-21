const request = require ('request');

const url = "http://api.weatherstack.com/current?access_key=a0968ee011951dd696c577f843c5dad6&query=37.8267,-122/4233units=f"

request({url:url, json:true}, (error, response) => {
 //console.log(response)
 //const data = JSON.parse(response.body)
 console.log('it is currently '+ response.body.current.temperature + ' degrees outside. there is a ' 
 + response.body.current.feelslike + ' chance of rain');
});

const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamFpeWtuZWVwaGFyciIsImEiOiJjbDczY3ZiY20wY2phM3ByMXJoamR3YzhqIn0.uKEs6wbQo3Lkr3a9a7xrGw"
request(geoCodeUrl:geoCodeUrl, json:t)
    
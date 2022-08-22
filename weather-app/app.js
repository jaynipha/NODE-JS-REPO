const request = require ('request');
const { showCompletionScript } = require('yargs');

 const url = "http://api.weatherstack.com/current?access_key=1aa65ae2e38217690cd4976f778c30c4&query=37.8267,-122/4233"

request({url:url, json:true}, (error, response) => {
  if(error){
    console.log('unable to connect to weather service' )

  }else if(response.body.error) {
    console.log('unable to find location')

  }
  else{
console.log('it is currently '+ response.body.current.temperature + ' degrees outside. there is a ' 
  + response.body.current.feelslike + ' chance of rain');
  }
});

const geoCodeurl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamFpeWtuZWVwaGFyciIsImEiOiJjbDczY3ZiY20wY2phM3ByMXJoamR3YzhqIn0.uKEs6wbQo3Lkr3a9a7xrGw"
request({url:geoCodeurl, json:true}, (error, response) => {
  if(error){
    
console.log('unable to connect to location services');

  } else if(response.body.features.length === 0){
console.log('unable to find location services. try another search')
  }
  
  else{
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude);
  }
    
    
})
    
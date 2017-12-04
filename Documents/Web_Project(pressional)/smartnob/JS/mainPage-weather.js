;(function(){
  var BD_IP_KEY = 'wQhh92yXEV6FVf0jo2lbeNm6PbnBsMIo'
  var WEATHER_KEY = '233fa00f775e1472ca5931d9f6258292'

  function vueWeather(data){
    console.log(data)
    new Vue({
      el: '#weather-wrap',

      data: function(){
        return {
          weatherData: data,
          weatherIcon: {
            sunShower: false,
            thunderStorm: false,
            cloudy: false,
            flurries: false,
            sunny: false,
            rainy: false,
          }
        }
      },

      components: {
        weather: {
          template: '#weather-container',
          props: ['weatherData','weatherIcon']
        }
      },

      ready: function(){
        this.weatherData.main.temp = (this.weatherData.main.temp*1.8- 459.67).toFixed(1)
        this.weatherData.name = this.weatherData.name.toUpperCase()
        this.descriptionMap2Icon()
      },

      methods: {
        descriptionMap2Icon: function(){
          var descriptionType = this.weatherData.weather[0].main
          switch (true) {
            case /thunderstorm/ig.test(descriptionType):
              this.weatherIcon.thunderStorm = true;
              break;
            case /Drizzle/ig.test(descriptionType):
              this.weatherIcon.rainy = true;
              break;
            case /Rain/ig.test(descriptionType):
              this.weatherIcon.rainy = true;
              break;
            case /Snow/ig.test(descriptionType):
              this.weatherIcon.flurries = true;
              break;
            case /Atmosphere/ig.test(descriptionType):
              this.weatherIcon.cloudy = true;
              break;
            case /Clear/ig.test(descriptionType):
              this.weatherIcon.sunny = true;
              break;
            default:
              this.weatherIcon.sunny = true;
              break;
          }
        }
      }
      
    })
  }

  function getWeatherData(crd){
    console.log(crd)
    var weatherData;
    ajaxHelper.get('http://api.openweathermap.org/data/2.5/weather',{
      APPID:WEATHER_KEY,
      lat:crd.lat,
      lon:crd.lng
    },function(data){
      vueWeather(data)
    })
  }

  ajaxHelper.get('https://location.services.mozilla.com/v1/geolocate',{
    key: 'test'
  },function(data){
    getWeatherData(data.location)
  })
  //刷新天气
  setInterval(function(){
    ajaxHelper.get('https://location.services.mozilla.com/v1/geolocate',{
      key: 'test'
    },function(data){
      getWeatherData(data.location)
    })
  },180000)

  // navigator.geolocation.getCurrentPosition(function (pos) {
  //   var crd = pos.coords;
  //   console.log(pos)
  //   getWeatherData(crd)
  // }, function (err) {
  //   console.warn('ERROR(' + err.code + '): ' + err.message);
  // },{
  //   enableHighAccuracy: true,
  //   timeout: 30000,
  //   maximumAge: 0
  // });
})()



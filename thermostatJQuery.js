$( document ).ready(function() {
  var thermostat = new Thermostat();
  getTemp();


  $(document).click(function() {
    $('#temperature').text( thermostat.temp )
    $('#temperature').attr('class', thermostat.usage())
  });

  $( "#tempUp" ).click(function( event ) {
    thermostat.up();
    updateTemp();
  });

  $( "#tempDown" ).click(function( event ) {
    thermostat.down();
    updateTemp();
  });

  $( "#reset" ).click(function( event ) {
    thermostat.reset();
    updateTemp();
  });

  $( "#switchPowerSavingOn" ).click(function( event ) {
    thermostat.switchPowerSavingOn();
    $('#power-saving-status').text("on")
    updateTemp();
  });

  $( "#switchPowerSavingOff" ).click(function( event ) {
    thermostat.switchPowerSavingOff();
    $('#power-saving-status').text("off")
  });

  $('#city-input-form').submit(function (event) {
    event.preventDefault();
    var city = $('#city-input').val();
    console.log(city);
    getWeather(city);
    postCity(city)
    $('#current-city').text(city)
  });

  function postCity(city) {
    $.ajax({
    url: "http://localhost:4567/update_city",
    data: {
        city: city
    },
    type: "POST",
    dataType : "json",
    })
  }

  function getTemp() {
    $.ajax({
      url: "http://localhost:4567/temperature",
      dataType: "json",
    }).done(function (num) {
      thermostat.temp = num.temp;
      $('#temperature').text( thermostat.temp )
      $('#temperature').attr('class', thermostat.usage())
      $('#current-city').text(num.city)
      getWeather(num.city)
    })

  }

  function getWeather(city) {
    var request = $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      data: {
        units: "metric",
        APPID: "3468bebd68f9567aac8f3faaad4f166e",
        q: city
      }
    });

    request.done(function(json) {
      $("#weather").text(json.main.temp)
    });

    request.fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, " + city + " is not a valid city" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
    });
  }

  function updateTemp() {
    $.ajax({
    url: "http://localhost:4567/update_temp",
    data: {
        temp: thermostat.temp
    },
    type: "POST",

    })
  }
});

$( document ).ready(function() {

  var thermostat = new Thermostat();


  $('#temperature').text( thermostat.temp )

  $(document).click(function() {
    $('#temperature').text( thermostat.temp )
    $('#temperature').attr('class', thermostat.usage())
  });

  $( "#tempUp" ).click(function( event ) {
    thermostat.up();
  });

  $( "#tempDown" ).click(function( event ) {
    thermostat.down();
  });

  $( "#reset" ).click(function( event ) {
    thermostat.reset();
  });

  $( "#switchPowerSavingOn" ).click(function( event ) {
    thermostat.switchPowerSavingOn();
    $('#power-saving-status').text("on")
  });

  $( "#switchPowerSavingOff" ).click(function( event ) {
    thermostat.switchPowerSavingOff();
    $('#power-saving-status').text("off")
  });

  $.ajax({
    url: "api.openweathermap.org/data/2.5/weather",
    data: {
        q: "London,uk",
        APPID: "3468bebd68f9567aac8f3faaad4f166e"
    },
    type: "GET",
    dataType : "json",
  })
    .fail(function( xhr, status, errorThrown ) {
    alert( "Sorry, there was a problem!" );
    console.log( "Error: " + errorThrown );
    console.log( "Status: " + status );
    console.dir( xhr );
    })

    .always(function( xhr, status ) {
      alert( "The request is complete!" );
      console.log("HELLO!");
    });

});

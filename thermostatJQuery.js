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

});

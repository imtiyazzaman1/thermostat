'use strict';

describe('Thermostat', function (){
  var thermostat;
  beforeEach(function (){
    thermostat = new Thermostat();
  });

  it("should have a starting temperature of 20", function() {
    expect(thermostat.temp).toEqual(STARTING_TEMP);
  });

  it("should have power saving on by default", function() {
    expect(thermostat.isPowerSaving).toBe(true);
  });

  describe('#up', function () {

    it('increases the temperature by 1', function () {
      thermostat.up();
      expect(thermostat.temp).toEqual(21);
    });

  });

  describe('#down', function () {

    it('decreases the temperature by 1', function () {
      thermostat.down();
      expect(thermostat.temp).toEqual(19);
    });

  });

  describe('.minTemp', function () {

    it('does not lower the temp below 10', function () {
      thermostat.temp = MINIMUM_TEMP;
      expect(function() { thermostat.down(); } ).toThrow('Temperature cannot be lower than 10');
    });
  });

  describe('.isPowerSaving', function () {

    it('does not raise the temp above 25 when on', function () {
      thermostat.isPowerSaving = true
      thermostat.temp = MAX_TEMP_PSM_ON;
      expect(function() { thermostat.up(); } ).toThrow('Temperature cannot be higher than 25');
    });

    it('does raise the temp above 25 when off', function () {
      thermostat.isPowerSaving = false;
      thermostat.temp = MAX_TEMP_PSM_ON;
      thermostat.up();
      expect(thermostat.temp).toEqual(26);
    })

    it('does not raise the temp above 32 when off', function () {
      thermostat.isPowerSaving = false;
      thermostat.temp = MAX_TEMP_PSM_OFF;
      expect(function() { thermostat.up(); } ).toThrow('Temperature cannot be higher than 32');

    })
  });

  describe('#reset', function () {

    it('reset temperature to 20', function functionName() {
      thermostat.temp = MAX_TEMP_PSM_ON;
      thermostat.reset();
      expect(thermostat.temp).toEqual(STARTING_TEMP);
    })

  });

  describe('#usage', function () {

    it('should return low usage when temp below 18', function () {
      thermostat.temp = 17;
      expect(thermostat.usage()).toEqual('low-usage')
    });

    it('should return medium usage when temp below 25', function () {
      expect(thermostat.usage()).toEqual('medium-usage')
    });

    it('should return high usage if temp above 25', function () {
      thermostat.temp = MAX_TEMP_PSM_ON;
      expect(thermostat.usage()).toEqual('high-usage')
    });
  })

 describe('#switchPowerSaving', function () {

   it('switches power saving off', function(){
     thermostat.switchPowerSaving();
     expect(thermostat.isPowerSaving).toBe(false)
   });

   it('switches power saving on', function(){
     thermostat.isPowerSaving = false
     thermostat.switchPowerSaving();
     expect(thermostat.isPowerSaving).toBe(true)
   });

 })

});

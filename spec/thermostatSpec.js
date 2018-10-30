describe('Thermostat', function (){
  var thermostat;
  beforeEach(function (){
    thermostat = new Thermostat();
  });

  it("should have a starting temperature of 20", function() {
    expect(thermostat.temp).toEqual(20);
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
      thermostat.temp = 10;
      expect(function() { thermostat.down(); } ).toThrow('Temperature cannot be lower than 10');
    });
  });

  describe('.isPowerSaving', function () {

    it('does not raise the temp above 25 when on', function () {
      thermostat.isPowerSaving = true
      thermostat.temp = 25;
      expect(function() { thermostat.up(); } ).toThrow('Temperature cannot be higher than 25 while power saving mode is on');
    });

    it('does raise the temp above 25 when off', function () {
      thermostat.isPowerSaving = false;
      thermostat.temp = 25;
      thermostat.up();
      expect(thermostat.temp).toEqual(26);
    })

    it('does not raise the temp above 32 when off', function () {
      thermostat.isPowerSaving = false;
      thermostat.temp = 32;
      expect(function() { thermostat.up(); } ).toThrow('Temperature cannot be higher than 32');

    })
  });

  describe('#method', function () {

    it('reset temperature to 20', function functionName() {
      thermostat.temp = 25;
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    })

  });

});

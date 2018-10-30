describe('Thermostat', function (){
var thermostat;
beforeEach(function (){
  thermostat = new Thermostat();
});
it("should have a starting temperature of 20", function() {
  expect(thermostat.temp).toEqual(20)
})

})

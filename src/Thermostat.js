const STARTING_TEMP = 20;

function Thermostat() {
  this.temp = STARTING_TEMP;
}

Thermostat.prototype.up = function () {
    this.temp++
};

Thermostat.prototype.down = function () {
  this.temp--
};

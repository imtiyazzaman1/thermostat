const STARTING_TEMP = 20;
const MINIMUM_TEMP = 20;

function Thermostat() {
  this.temp = STARTING_TEMP;
  this.mintemp = MINIMUM_TEMP;
}

Thermostat.prototype.up = function () {
    this.temp++
};

Thermostat.prototype.down = function () {
    if(this.temp<=10) {throw 'Temperature cannot be lower than 10';
  }
  else {
    this.temp--
  }
};

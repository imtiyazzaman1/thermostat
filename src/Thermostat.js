const STARTING_TEMP = 20;
const MINIMUM_TEMP = 10;

function Thermostat() {
  this.temp = STARTING_TEMP;
  this.minTemp = MINIMUM_TEMP;
  this.isPowerSaving = true;
}

Thermostat.prototype.up = function () {
  if (this.isPowerSaving && this.temp == 25) {
    throw 'Temperature cannot be higher than 25 while power saving mode is on';
  } else {
    this.temp++
  }
};

Thermostat.prototype.down = function () {
    if(this.temp<=this.minTemp) {throw 'Temperature cannot be lower than 10';
  }
  else {
    this.temp--
  }
};

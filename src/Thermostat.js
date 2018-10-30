const STARTING_TEMP = 20;
const MINIMUM_TEMP = 10;

function Thermostat() {
  this.temp = STARTING_TEMP;
  this.minTemp = MINIMUM_TEMP;
  this.isPowerSaving = true;
}

Thermostat.prototype.up = function () {
  this._checkPowerSaving();
  this.temp++
};

Thermostat.prototype.down = function () {
  this._checkMinTemp();
  this.temp--
};

Thermostat.prototype.reset = function () {
  this.temp = STARTING_TEMP
};

Thermostat.prototype._checkPowerSaving = function () {
  if (this.temp === this._maxTemp()) {
    throw('Temperature cannot be higher than ' + this._maxTemp())
  }
};

Thermostat.prototype._checkMinTemp = function () {
  if(this.temp<=this.minTemp) {
    throw 'Temperature cannot be lower than 10';
  }
};

Thermostat.prototype._maxTemp = function () {
  if(this.isPowerSaving) {
    return 25;
  }
  else {
    return 32;
  }
};

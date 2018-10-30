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

Thermostat.prototype._checkPowerSaving = function () {
  if (this._powerSavingOnMax()) {
    throw 'Temperature cannot be higher than 25 while power saving mode is on';
  }
  else if (this._powerSavingOffMax()) {
    throw 'Temperature cannot be higher than 32';
  }
};

Thermostat.prototype._powerSavingOnMax = function () {
  return this.isPowerSaving && this.temp == 25;
};

Thermostat.prototype._powerSavingOffMax = function () {
  return !this.isPowerSaving && this.temp == 32
};

Thermostat.prototype._checkMinTemp = function () {
  if(this.temp<=this.minTemp) {
    throw 'Temperature cannot be lower than 10';
  }
};

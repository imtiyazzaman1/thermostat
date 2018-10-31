const STARTING_TEMP = 20
const MINIMUM_TEMP = 10
const LOW_USAGE = 18
const MEDIUM_USAGE = 25
const MAX_TEMP_PSM_ON = 25
const MAX_TEMP_PSM_OFF = 32

function Thermostat () {
  this.temp = STARTING_TEMP
  this.minTemp = MINIMUM_TEMP
  this.isPowerSaving = true
}

Thermostat.prototype.up = function () {
  this._checkPowerSaving()
  this.temp++
}

Thermostat.prototype.down = function () {
  this._checkMinTemp()
  this.temp--
}

Thermostat.prototype.reset = function () {
  this.temp = STARTING_TEMP
}

Thermostat.prototype.usage = function () {
  if (this.temp < LOW_USAGE) {
    return 'low-usage'
  } else if (this.temp < MEDIUM_USAGE) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
}

Thermostat.prototype.switchPowerSaving = function () {
  this.isPowerSaving = !this.isPowerSaving
}

Thermostat.prototype._checkPowerSaving = function () {
  if (this.temp === this._maxTemp()) {
    throw new Error('Temperature cannot be higher than ' + this._maxTemp())
  }
}

Thermostat.prototype._checkMinTemp = function () {
  if (this.temp <= this.minTemp) {
    throw new Error('Temperature cannot be lower than 10')
  }
}

Thermostat.prototype._maxTemp = function () {
  if (this.isPowerSaving) {
    return MAX_TEMP_PSM_ON
  } else {
    return MAX_TEMP_PSM_OFF
  }
}

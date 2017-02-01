'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_PSM_ON = 25;
  this.MAXIMUM_PSM_OFF = 32;
  this.MAXIMUM_TEMPERATURE = this.MAXIMUM_PSM_ON;
  this.isPowerSavingOn = true;
};

Thermostat.prototype.up = function() {
  if (this.isPowerSavingOn === false) {
    this.MAXIMUM_TEMPERATURE = this.MAXIMUM_PSM_OFF;
  };

  if (this.temperature === this.MAXIMUM_TEMPERATURE) {
    return;
  };

  this.temperature += 1;
};

Thermostat.prototype.down = function()  {
  if (this.temperature === this.MINIMUM_TEMPERATURE) {
    return;
  };
  this.temperature -= 1;
};

Thermostat.prototype.powerSavingOff = function() {
  this.isPowerSavingOn = false;
};

Thermostat.prototype.powerSavingOn = function() {
  this.isPowerSavingOn = true;
};

Thermostat.prototype.reset = function()  {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function()  {
  if (this.temperature < 18) {
    return 'low-usage'
  };
  if (this.temperature >= 18 && this.temperature <= 25) {
    return 'medium-usage'
  };
  return 'high-usage';
};

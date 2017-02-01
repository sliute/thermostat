'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function()  {
  if (this.temperature === this.MINIMUM_TEMPERATURE) {
    return;
  };
  this.temperature -= 1;
};

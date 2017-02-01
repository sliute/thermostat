'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases temperature with an UP command', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases temperature with an DOWN command', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 1; i < 12; i++) {
      thermostat.down();
    };
    expect(thermostat.temperature).toEqual(10);
  });

  describe('power saving mode', function(){

    it('is on', function() {
      expect(thermostat.isPowerSavingOn).toBeTruthy();
    });

    it('can be turned off', function() {
      thermostat.powerSavingOff()
      expect(thermostat.isPowerSavingOn).toBeFalsy();
    });

    it('can be turned on', function() {
      thermostat.powerSavingOff()
      thermostat.powerSavingOn()
      expect(thermostat.isPowerSavingOn).toBeTruthy();
    });

  });


});

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

  it('can be reset to 20 degrees', function() {
    for (var i = 0; i < 3; i++) {
      thermostat.down();
    };
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  describe('power saving mode', function(){

    it('is on by default', function() {
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

    it('allows for a maximum of 25 degrees when on', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.temperature).toEqual(25);
    });

    it('allows for a maximum of 32 degrees when off', function() {
      thermostat.powerSavingOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      };
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe('current energy usage feedback', function(){

    it('returns low when under 18 degrees', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      };
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('returns medium when between 18 and 25 degrees', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('returns high when above 25 degrees', function() {
      thermostat.powerSavingOff();
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });

  });


});

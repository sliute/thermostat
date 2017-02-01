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

  it('decreses temperature with an DOWN command', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

});

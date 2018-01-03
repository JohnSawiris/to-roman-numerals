var Convert = require('./../js/scripts.js').convertModule;

describe('Roman Numrels', function() {

  it('should return nothing if zero is inputted', function() {
    expect(Convert(0)).toEqual("");
  });

  it('should if one is inputted, output will be I', function() {
    expect(Convert(1)).toEqual("I");
  });

  it('should return IV if 4 is inputted', function() {
    expect(Convert(4)).toEqual("IV");
  });

  it('should return XC if 90 is inputted', function() {
    expect(Convert(90)).toEqual("XC");
  });

  it('should return XCIX if 99 is inputted', function() {
    expect(Convert(99)).toEqual("XCIX");
  });

  it('should return CM if 900 is inputted', function() {
    expect(Convert(900)).toEqual("CM");
  });

  it('should return CD if 400 is inputted', function() {
    expect(Convert(400)).toEqual("CD");
  });

  it('should return It can\'t be greater if 4000 is inputted', function() {
    expect(Convert(4000)).toEqual("Number can't be greater than 3999");
  });

});

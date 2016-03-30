/* jshint undef:false */

var main = require("../index");
var chai = require("chai");
var should = chai.should();
var expect = chai.expect;


describe("convert numbers to english words", function() {
  "use strict";

  describe("handle invalid input", function() {
    
    it("should throw error if input is not number", function() {
      expect(function() {
        main.convert("abcd");
      }).to.throw("Input value should be a number");
    });

    it("should throw error if input number is less than 0", function() {
      expect(function() {
        main.convert(-1);
      }).to.throw("Number should not be less than zero");
    });

    it("should throw error if input number is more than 1000", function() {
      expect(function() {
        main.convert(1001);
      }).to.throw("Number should not be more than 1000");
    });

    it("should throw error if number is not integer", function() {
      expect(function() {
        main.convert(135.35);
      }).to.throw("Number should be integer");
    });

  });
  
  it("should convert numbers from 1 to 9", function() {
    var numbers = [0,1,2,3,4,5,6,7,8,9];
    var result = [];
    
    numbers.forEach(function(number) {
      var converted = main.convert(number);
      result.push(converted);
    });
    
    var expectedResult = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    result.should.eql(expectedResult);
  });


  it("should convert numbers from 10 to 19", function() {
    var numbers = [10,11,12,13,14,15,16,17,18,19];
    var result = [];

    numbers.forEach(function(number) {
      var converted = main.convert(number);
      result.push(converted);
    });

    var expectedResult = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    result.should.eql(expectedResult);
  });

  it("should convert tens from 20 to 90", function() {
    var numbers = [20,30,40,50,60,70,80,90];
    var result = [];

    numbers.forEach(function(number) {
      var converted = main.convert(number);
      result.push(converted);
    });

    var expectedResult = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    result.should.eql(expectedResult);
  });
});




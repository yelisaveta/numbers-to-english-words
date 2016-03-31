/* jshint undef:false */

var main = require("../coverter");
var chai = require("chai");
var should = chai.should();
var expect = chai.expect;


describe("convert numbers to english words", function() {
  "use strict";

  describe("handle invalid input", function() {
    
    it("should throw error if input is NaN", function() {
      expect(function() {
        main.convert(NaN);
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

  describe("handle one digit numbers", function() {

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

  });

  describe("handle two digit numbers", function() {

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

    it("should convert round numbers from 20 to 90", function() {
      var numbers = [20,30,40,50,60,70,80,90];
      var result = [];

      numbers.forEach(function(number) {
        var converted = main.convert(number);
        result.push(converted);
      });

      var expectedResult = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

      result.should.eql(expectedResult);
    });

    it("should convert numbers from 21 to 99", function() {
      var numbers = [21, 42, 58, 99];
      var result = [];

      numbers.forEach(function(number) {
        var converted = main.convert(number);
        result.push(converted);
      });

      var expectedResult = ["twenty-one", "forty-two", "fifty-eight", "ninety-nine"];

      result.should.eql(expectedResult);
    });

    it("should convert numbers from 100 to 999", function() {
      var numbers = [100, 320, 427, 500, 999];
      var result = [];

      numbers.forEach(function(number) {
        var converted = main.convert(number);
        result.push(converted);
      });

      var expectedResult = ["one hundred", "three hundreds and twenty", "four hundreds and twenty-seven", "five hundreds", "nine hundreds and ninety-nine"];

      result.should.eql(expectedResult);
    });

    it("should convert 1000", function() {
      main.convert(1000).should.equal("one thousand");
    });

  });
});




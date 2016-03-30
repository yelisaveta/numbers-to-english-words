"use strict";
var _ = require("underscore");

var singleNumbersMapper = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine"
};
var specialTeensMapper = {
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  15: "fifteen",
  18: "eighteen"
};

module.exports.convert = function(input) {
  var word;

  var errorMessage = getErrorForInvalidInput(input);
  if (errorMessage) {
    throw new Error(errorMessage);
  }

  if (input < 10) {
    word = getWordForSingleNumber(input);
  } else if (input >= 10 && input < 20) {
    word = getWordForTeenNumber(input);
  }

  return word;
};

function getErrorForInvalidInput(input) {
  var errorMessage;

  if (!_.isNumber(input)) {
    errorMessage = "Input value should be a number";
  }
  if (input < 0) {
    errorMessage = "Number should not be less than zero";
  }
  if (input > 1000) {
    errorMessage = "Number should not be more than 1000";
  }

  return errorMessage;
}

function getWordForSingleNumber(number) {
  return singleNumbersMapper[number];
}

function getWordForTeenNumber(number) {
  var word;

  if (specialTeensMapper[number]) {
    word = specialTeensMapper[number];
  } else {
    var lastDigit = number - 10;
    word = singleNumbersMapper[lastDigit] + "teen";
  }

  return word;
}
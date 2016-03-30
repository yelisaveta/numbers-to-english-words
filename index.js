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
var specialTensMapper = {
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  80: "eighty"
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
  } else if (isTensNumber(input)) {
    word = getWordForTensNumber(input);
  }

  return word;
};


function getErrorForInvalidInput(input) {
  if (!_.isNumber(input)) {
    return "Input value should be a number";
  }
  if (input < 0) {
    return "Number should not be less than zero";
  }
  if (input > 1000) {
    return "Number should not be more than 1000";
  }
  if (input % 1 !== 0) {
    return "Number should be integer";
  }
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

function isTensNumber(number) {
  var isNumberInRange = number >= 20 && number < 100;
  var numberIsRound = (number / 10) % 1 === 0;

  return isNumberInRange && numberIsRound;
}

function getWordForTensNumber(number) {
  var word;

  if (specialTensMapper[number]) {
    word = specialTensMapper[number];
  } else {
    var firstDigit = number / 10;
    word = singleNumbersMapper[firstDigit] + "ty";
  }

  return word;
}
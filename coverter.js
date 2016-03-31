"use strict";

var _ = require("underscore");
var mapper = require("./numbers-mapper");
var singleNumbersMapper = mapper.singleNumbers;
var specialTeensMapper = mapper.specialTeens;
var specialTensMapper = mapper.specialTens;


module.exports.convert = function(input) {
  var errorMessage = getErrorForInvalidInput(input);
  if (errorMessage) {
    throw new Error(errorMessage);
  }

  if (input < 10) {
    return getWordForSingleNumber(input);
  }
  if (input < 20) {
    return getWordForTeenNumber(input);
  }
  if (input < 100) {
    if (isTensNumber(input)) {
      return getWordForTensNumber(input);
    } else {
      return getWordForDoubleNumber(input);
    }
  }
  if (input < 1000) {
    return getWordForThreeDigitsNumber(input);
  }

  return "one thousand";
};


function getErrorForInvalidInput(input) {
  if (_.isNaN(input)) {
    return "Input value should be a number";
  }
  if (input % 1 !== 0) {
    return "Number should be integer";
  }
  if (input < 0) {
    return "Number should not be less than zero";
  }
  if (input > 1000) {
    return "Number should not be more than 1000";
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
    var firstDigit = getFirstDigit(number);
    word = singleNumbersMapper[firstDigit] + "ty";
  }

  return word;
}

function getWordForDoubleNumber(number) {
  var firstDigit = getFirstDigit(number);
  var lastDigit = number - firstDigit*10;
  var tensPart = firstDigit*10;

  return [getWordForTensNumber(tensPart), getWordForSingleNumber(lastDigit)].join("-");
}

function getWordForThreeDigitsNumber(number) {
  var word;

  var firstDigit = getFirstDigit(number);
  var postfix = firstDigit > 1 ? "s" : "";
  word = [getWordForSingleNumber(firstDigit), "hundred" + postfix].join(" ");

  if (number % 100 !== 0) {
    var twoDigitsNumber = number - firstDigit*100;
    word += ["", "and", exports.convert(twoDigitsNumber)].join(" ");
  }

  return word;
}

function getFirstDigit(number) {
  var pow = number.toString().length - 1;

  return Math.floor(number / Math.pow(10, pow));
}
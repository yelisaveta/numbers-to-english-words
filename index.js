"use strict";

var prompt = require("prompt");
var converter = require("./coverter");

prompt.start();

askForInput();

function askForInput() {
  prompt.get([{
    name: "input",
    type: "number",
    required: true,
    description: "Enter integer number from 0 to 1000"
  }], function (err, result) {
    if (err) {
      return console.log("");
    }

    var input = result.input;
    var output;

    console.log("You entered: ", input);

    try {
      output = converter.convert(input);
      console.log("Result: ", output);

      askForInput();
    } catch (e) {
      console.warn("Error: ", e.message);

      askForInput();
    }
  });
}

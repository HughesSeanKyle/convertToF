// Basic Algorithm Scripting: Convert Celsius to Fahrenheit

/*Description

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32. 
You are given a variable celsius representing a temperature in Celsius. 
Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.*/

//Solution

function convertToF(celsius) { //1
  let fahrenheit = celsius * 9/5 + 32; //2

  return fahrenheit; //3
}

console.log(convertToF(30)); //4

//Output = 86

//Notes To help me understand the code

/* 1  The function declaration (function statement) defines a function with the specified parameters.
      You can also define functions using the Function constructor and a function expression.
      source - [https://devdocs.io/javascript/statements/function]
      
      "convertToF" - the name of the function
      "celsius" - The argument for the function - The value to be converted to fahrenheit
      */

/* 2 - Initializing fahrenheit variable with "let" key word - (let is block scoped and var is function scoped) 
     - celsius * 9/5 + 32; - This portion is the conversion - Your (input * (9/5)) + 32. This coversion is stored in the Fahrenheit variable 
      */
//3 - The return ends function execution and specifies a value to be returned to the function caller (convertToF)
//4 - Renders the function output to the console(output screen) - The 30 represent the initial celsius input value. (can be any number)


// Solution source - [https://github.com/freeCodeCamp/freeCodeCamp/blob/master/curriculum/challenges/english/02-javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit.english.md#solution]
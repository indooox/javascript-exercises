const add = function(num1,num2) {

	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  let result = 0
	for (number of numbers) {
    result += number;
  };
  return result; 
};

const multiply = function(numbers) {
  let result = 1;
  for (number of numbers) {
    result *= number;
  };
  return result
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  let result = 1
	for (let i = num; i > 0; i--){
    result *= i;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

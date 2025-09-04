const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(nums) {
	return nums.reduce((product, num) => product+num, 0)
};

const multiply = function(nums) {
  return nums.reduce((product, num) => product*num)
};

const power = function(num, pow) {
  return num**pow
};

const factorial = function(num) {
	let result = 1
  while (num > 0){
    result *= num
    num -= 1
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

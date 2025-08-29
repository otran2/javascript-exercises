const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){ return "ERROR";}
    let smallest = Math.min(num1, num2)
    let biggest = Math.max(num1, num2)
    let sum = 0
    for (; smallest <= biggest; smallest++){
        sum += smallest
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

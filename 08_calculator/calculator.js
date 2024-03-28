const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  return array.reduce((theSum, item) => theSum + item, 0);

 

};

const multiply = function(array) {
  return array.reduce((product, item) => product * item, 1);


};

const power = function(a, b) {
  return Math.pow(a, b)

	
};

const factorial = function(arg) {
  let array = [];
  for(let i = arg; i > 0; i--) {
    array.push(i);
  }
  return array.reduce((product, item) => product * item, 1);

  
	
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

const input = document.querySelector("#screen");
const numList = document.querySelectorAll(".num");
const equalBtn = document.getElementById("equal");
const operatorList = document.querySelectorAll(".operator");
const clearBtn = document.getElementById("clear");

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "/":
      return division(a, b);
    case "*":
      return multiplication(a, b);
    case "-":
      return subtraction(a, b);
    case "+":
      return addition(a, b);
  }
  num1 = 0;
  num2 = 0;
  operator = "";
}

//storing the ‘display value’ in a variable
let num1;
let num2Holder;
let num2;
let operator;
let result = 0;

function populateDisplay() {
  for (let index = 0; index < numList.length; index++) {
    numList[index].addEventListener("click", function () {
      //populate the display when you click the number buttons
      input.innerHTML += numList[index].textContent;
      num2Holder += numList[index].textContent; //grabbing values to pass on to num2
    });
  }

  for (let index = 0; index < operatorList.length; index++) {
    operatorList[index].addEventListener("click", function () {
      //store the first number that is input into the calculator when a user presses an operator
      num1 = Number(input.innerHTML);
      console.log("num 1:", num1);
      //populate the display when you click the operator buttons
      operator = operatorList[index].textContent;
      console.log("operator :", operator);
      input.innerHTML += ` ${operator} `;
      if (operator != " ") {
        num2Holder = ""; // clear num2Holder to remove the first num values if there is an operator
      }
    });
  }
  //Store num2Holder into second number num2 after pressing equals button
  //call operator function
  equalBtn.addEventListener("click", function () {
    console.log("num2 Holder:", num2Holder);
    num2 = Number(num2Holder);
    console.log("num 2:", num2);
    result = operate(operator, num1, num2);
    console.log("Result:", result);
    input.innerHTML = result;
  });
}

populateDisplay();

function clear() {
  num1 = 0;
  num2 = 0;
  operator = "";
  input.innerHTML = "";
}

clearBtn.addEventListener("click", clear);

/* 
Users should be able to string together several operations and get the right answer,
with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42.
*/

//Store all the input into a nested array
//Use if statement to check if the arrays has more than one operator, if there is more than one...
//make it work like this...
//get the result of the first equation (12 + 7 - 5 * 3) => (12 + 7) => 19 => (9 - 5) => 4 => (4 * 3) => 12 => result: 12
//create a counter variable++ if array contains operators

//I would also Add num2 if i press another operator

//check if array has more than three items and if so solve it by joining the array and running it

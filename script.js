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

function clear() {
  num1 = 0;
  num2 = 0;
  operator = "";
  input.innerHTML = "";
}
clearBtn.addEventListener("click", clear);

//You should be storing the ‘display value’ in a variable somewhere for use in the next step
let num1 = 0;
let num2Holder;
let num2 = 0;
let operator;
let result = 0;

function populateDisplay() {
  for (let index = 0; index < numList.length; index++) {
    numList[index].addEventListener("click", function () {
      //populate the display when you click the number buttons
      input.innerHTML += numList[index].value;
    });
  }

  for (let index = 0; index < operatorList.length; index++) {
    operatorList[index].addEventListener("click", function () {
      //store the first number that is input into the calculator when a user presses an operator
      num1 = Number(input.innerHTML);
      console.log("num 1:", num1);

      operator = operatorList[index].value;
      console.log("operator :", operator);
      //populate the display when you click the number buttons
      input.innerHTML += ` ${operator} `;
      num2Holder = "";
      if (operator != " ") {
        for (let index = 0; index < numList.length; index++) {
          numList[index].addEventListener("click", function () {
            num2Holder += numList[index].value; //store input.innerHTML into another variable and store numList[index].value
            console.log("num2 Holder:", num2Holder);
          });
        }
      }
    });
  }

  equalBtn.addEventListener("click", function () {
    /* console.log("num2 Holder:", num2Holder); */
    num2 = Number(num2Holder); //Store second number after pressing equals button
    console.log("num 2:", num2);
    result = operate(operator, num1, num2);
    console.log("Result:", result);
    input.innerHTML = result;
  });
}
populateDisplay();

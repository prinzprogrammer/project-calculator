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
      return (input.innerHTML = division(a, b));
    case "*":
      return (input.innerHTML = multiplication(a, b));
    case "-":
      return (input.innerHTML = subtraction(a, b));
    case "+":
      return (input.innerHTML = addition(a, b));
  }
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
let num2 = 0;
let operator;

function populateDisplay() {
  //Create the functions that populate the display when you click the number buttons.
  for (let index = 0; index < numList.length; index++) {
    numList[index].addEventListener("click", function () {
      input.innerHTML += numList[index].value;
    });
  }
  let secondInput = 0;
  for (let index = 0; index < operatorList.length; index++) {
    //You’ll need to store the first number that is input into the calculator when a user presses an operator
    operatorList[index].addEventListener("click", function () {
      num1 = Number(input.innerHTML);
      console.log("num1:", num1);
      operator = operatorList[index].value;
      console.log("operator:", operator);
      input.innerHTML += ` ${operator} `;
      for (let index = 0; index < numList.length; index++) {
        numList[index].addEventListener("click", function () {
          secondInput += numList[index].value;
        });
      }
    });
  }
  //Store second number after pressing equals button
  //store input.innerHTML into another variable and clear it or..
  //Store it into a variable
  equalBtn.addEventListener("click", function () {
    num2 = Number(secondInput);
    console.log("secondInput:", secondInput);
    console.log("num2:", num2);
    operate(operator, num1, num2);
    console.log("result:", operate(operator, num1, num2));
  });
}
populateDisplay();

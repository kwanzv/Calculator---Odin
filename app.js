const display = document.querySelector("#display");

let defaultValue = 0;
let finalValue = 0;
let currentValue = "";
let operationValue = "";
let screen = document.getElementById("display");

let clearBtn = document
  .getElementById("clear")
  .addEventListener("click", clear);

function clear() {
  currentValue = "";
  finalValue = 0;
  screen.textContent = defaultValue;
  operationValue = "";
}

function update() {
  screen.textContent = 0;
  currentValue = "";
}

function init() {
  checkBtn();
  update();
}

function calc(id) {
  switch (id) {
    case "+":
      finalValue += parseInt(currentValue);
      console.log(finalValue);
      currentValue = "";
      screen.textContent = finalValue;
      break;
    case "-":
      finalValue -= parseInt(currentValue);
      console.log(finalValue);
      currentValue = "";
      screen.textContent = finalValue;
      break;
    case "*":
      finalValue *= parseInt(currentValue);
      console.log(finalValue);
      currentValue = "";
      screen.textContent = finalValue;
      break;
    case "=":
      break;
    case "%":
      finalValue = parseInt(currentValue);
      console.log(finalValue);
      currentValue = "";
      screen.textContent = finalValue;
      break;
  }
}

function checkBtn() {
  const btnNums = document.querySelectorAll(".btn-number");
  const operators = document.querySelectorAll(".btn-operator");

  btnNums.forEach((btn) => {
    btn.addEventListener("click", (event) => checkDigits(event.target.id));
  });

  operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
      if (finalValue === 0) {
        finalValue += parseInt(currentValue);
        update();
        console.log(finalValue);
      } else if (finalValue > 0) {
        calc(event.target.id);
      }
    });
  });

  function checkDigits(id) {
    currentValue += id;
    screen.textContent = currentValue;
    console.log(currentValue);
  }
}

init();

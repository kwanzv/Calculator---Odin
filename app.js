const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

const numbers = [];
let total = 0;
let currentValue = "";
let screen = document.getElementById("display");
screen.textContent = total;

let addBtn = document.getElementById("+").addEventListener("click", add);
let clearBtn = document
  .getElementById("clear")
  .addEventListener("click", remove);

function init() {
  digits();
}

function digits() {
  const nums = document.querySelectorAll(".btn.number");

  nums.forEach((num) => {
    num.addEventListener("click", function () {
      if ((total = 0 || currentValue === "")) {
        screen.textContent = currentValue += num.id;
      } else {
        screen.textContent = currentValue += num.id;
      }
    });
  });
}

function add() {
  numbers.push(parseInt(screen.textContent));
  currentValue = "";
  console.log(numbers);
  total = numbers.reduce((total, current) => {
    return total + current;
  }, 0);
  screen.textContent = total;
}

function remove() {
  currentValue = "";
  total = 0;
  screen.textContent = total;
  numbers.length = 0;
}

init();

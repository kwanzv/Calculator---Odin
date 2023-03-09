const numbers = [];
let currentValue = "";
let sum = 0;
const digits = document.querySelectorAll(".btn.number");
let addBtn = document.querySelector(".add").addEventListener("click", add);
let example = document.getElementById("display");

digits.forEach((digit) => {
  digit.addEventListener("click", function () {
    currentValue += digit.textContent;
    example.textContent = currentValue.substring(1);
    console.log(currentValue);
  });
});

function add() {
  numbers.push(parseInt(currentValue));
  currentValue = 0;
  sum = numbers.reduce((total, current) => {
    return total + current;
  }, 0);
  example.textContent = sum;
}

function remove() {
  currentValue = 0;
  sum = 0;
  example.textContent = currentValue;
  numbers.length = 0;
}

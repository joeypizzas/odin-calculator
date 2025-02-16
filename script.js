// TOP caluclator script

let firstNumInput = 0;
let secondNumInput = 0;
let operatorInput = 0;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "CHUMP";
    } else {
        return num1 / num2;
    }
}

function percent(num) {
    return num / 100;
}

function plusNegative(num) {
    return num - (num * 2);
}

function removeDisplayItem() {
    const displayItem = document.querySelector(".displayInput");
    displayItem.remove();
}

function addDisplayItem(num) {
    const display = document.querySelector("#display");
    const newDisplayItem = document.createElement("div");
    newDisplayItem.classList.add("displayInput");
    newDisplayItem.textContent = num;
    display.appendChild(newDisplayItem);
}

function allClear() {
    removeDisplayItem();
    addDisplayItem(0);
    firstNumInput = 0;
    secondNumInput = 0;
    operatorInput = 0;
}

const calculator = document.querySelector("#calculator");
calculator.addEventListener("mousedown", (event) => {
    if (event.target.tagName === "BUTTON" && event.target.closest("#calculator")) {
        if (event.target.classList.contains("specialButton")) {
            event.target.style.backgroundColor = "#D2B097";
        } else if (event.target.classList.contains("number") || event.target.classList.contains("zero")) {
            event.target.style.backgroundColor = "#DAA520";
        } else {
            event.target.style.backgroundColor = "#FF7F50";
        }
    }
});

calculator.addEventListener("mouseup", (event) => {
    if (event.target.tagName === "BUTTON" && event.target.closest("#calculator")) {
        if (!isNaN(event.target.textContent) || event.target.textContent === ".") {
            if (firstNumInput === 0 && operatorInput === 0) {
                firstNumInput = event.target.textContent;
                removeDisplayItem();
                addDisplayItem(firstNumInput);
            } else if (firstNumInput != 0 && operatorInput === 0 && firstNumInput.length < 10) {
                if (!isNaN(event.target.textContent)) {
                    firstNumInput += event.target.textContent;
                } else if (!firstNumInput.includes(".")) {
                    firstNumInput += event.target.textContent;
                } 
                removeDisplayItem();
                addDisplayItem(firstNumInput);
            } else if (firstNumInput != 0 && operatorInput != 0 && secondNumInput === 0) {
                secondNumInput = event.target.textContent;
                removeDisplayItem();
                addDisplayItem(secondNumInput);
                const operator = document.querySelectorAll(".operator");
                operator.forEach(item => {
                    item.style.backgroundColor = "orange";
                });
            } else if (firstNumInput != 0 && operatorInput != 0 && secondNumInput != 0 && secondNumInput.length < 10) {
                if (!isNaN(event.target.textContent)) {
                    secondNumInput += event.target.textContent;
                } else if (!secondNumInput.includes(".")) {
                    secondNumInput += event.target.textContent;
                }
                removeDisplayItem();
                addDisplayItem(secondNumInput);
            }
            event.target.style.backgroundColor = "gold";
        } else {
            if (operatorInput === 0) {
                if (event.target.textContent === "+" || event.target.textContent === "-" || event.target.textContent === "*" || event.target.textContent === "/") {
                    operatorInput = event.target.textContent; 
                    console.log(operatorInput);
                }
            } 
        }
    }
});
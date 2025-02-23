// TOP caluclator script

let firstNumInput = 0;
let secondNumInput = 0;
let operatorInput = 0;

// Calculates the sum of user inputs, prepares second input for chained calculations
function add(num1, num2) {
    firstNumInput = Number(num1) + Number(num2);
    secondNumInput = 0;
    return firstNumInput;
}

// Calculates the difference of user inputs, prepares second input for chained calculations
function subtract(num1, num2) {
    firstNumInput = num1 - num2;
    secondNumInput = 0;
    return firstNumInput;
}

// Calculates the product of user inputs, prepares second input for chained calculations
function multiply(num1, num2) {
    firstNumInput = num1 * num2;
    secondNumInput = 0;
    return firstNumInput;
}

// Calculates the quotient of user inputs, prepares second input for chained calculations
function divide(num1, num2) {
    if (Number(num2) === 0) {
        firstNumInput = 0;
        secondNumInput = 0;
        operatorInput = 0;
        return "CHUMP"; 
    } else {
        firstNumInput = num1 / num2;
        secondNumInput = 0
        return firstNumInput;
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

// Highlights button on click down to give user feedback
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

const operator = document.querySelectorAll(".operator");
const specialButton = document.querySelectorAll(".specialButton");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const division = document.querySelector("#division");

// Logic to store numbers/operators and perform calculations on button click up
calculator.addEventListener("mouseup", (event) => {
    if (event.target.tagName === "BUTTON" && event.target.closest("#calculator")) { 
        if (!isNaN(event.target.textContent) || event.target.textContent === ".") { // Checks for number/decimal button clicks to store first/second number inputs
            if (Number(firstNumInput) === 0 && !String(firstNumInput).includes(".") && operatorInput === 0) {
                if (event.target.textContent === ".") {
                    firstNumInput = 0 + event.target.textContent;
                } else {
                    firstNumInput = event.target.textContent;
                }
                removeDisplayItem();
                addDisplayItem(firstNumInput);
            } else if ((firstNumInput != 0 || firstNumInput === "0.") && operatorInput === 0 && firstNumInput.length < 10) {
                if (!isNaN(event.target.textContent)) {
                    firstNumInput += event.target.textContent;
                } else if (!firstNumInput.includes(".")) {
                    firstNumInput += event.target.textContent;
                } 
                removeDisplayItem();
                addDisplayItem(firstNumInput);
            } else if (firstNumInput == 0 && operatorInput != 0 && Number(secondNumInput) === 0 && !String(secondNumInput).includes(".")) {
                if (event.target.textContent === ".") {
                    secondNumInput = 0 + event.target.textContent;
                } else {
                    secondNumInput = event.target.textContent;
                }
                removeDisplayItem();
                addDisplayItem(secondNumInput);
                operator.forEach(item => {
                    item.style.backgroundColor = "orange";
                });
            } else if (firstNumInput != 0 && operatorInput != 0 && Number(secondNumInput) === 0 && !String(secondNumInput).includes(".")) {
                if (event.target.textContent === ".") {
                    secondNumInput = 0 + event.target.textContent;
                } else {
                    secondNumInput = event.target.textContent;
                }
                removeDisplayItem();
                addDisplayItem(secondNumInput);
                operator.forEach(item => {
                    item.style.backgroundColor = "orange";
                });
            } else if (firstNumInput != 0 && operatorInput != 0 && (secondNumInput != 0 || secondNumInput === "0.") && secondNumInput.length < 10) {
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
            if (operatorInput === 0) { // Stores first operator input selected for calculation to ensure used for operating.
                if (event.target.textContent === "+" || event.target.textContent === "-" || event.target.textContent === "*" || event.target.textContent === "/") {
                    operatorInput = event.target.textContent; 
                }
            } else { // Operates using existing stored operator, and stores new one. Allows chaining calculations. 
                if (event.target.textContent === "+") {
                    removeDisplayItem();
                    if (operatorInput === "+") {
                        addDisplayItem(add(firstNumInput, secondNumInput));
                    } else if (operatorInput === "-") {
                        addDisplayItem(subtract(firstNumInput, secondNumInput));
                        minus.style.backgroundColor = "orange";
                    } else if (operatorInput === "*") {
                        addDisplayItem(multiply(firstNumInput, secondNumInput));
                        times.style.backgroundColor = "orange"; 
                    } else {
                        addDisplayItem(divide(firstNumInput, secondNumInput));
                        division.style.backgroundColor = "orange";
                    }
                    operatorInput = "+";
                } else if (event.target.textContent === "-") {
                    removeDisplayItem();
                    if (operatorInput === "+") {
                        addDisplayItem(add(firstNumInput, secondNumInput));
                        plus.style.backgroundColor = "orange";
                    } else if (operatorInput === "-") {
                        addDisplayItem(subtract(firstNumInput, secondNumInput));
                    } else if (operatorInput === "*") {
                        addDisplayItem(multiply(firstNumInput, secondNumInput)); 
                        times.style.backgroundColor = "orange";
                    } else {
                        addDisplayItem(divide(firstNumInput, secondNumInput));
                        division.style.backgroundColor = "orange";
                    }
                    operatorInput = "-";
                } else if (event.target.textContent === "*") {
                    removeDisplayItem();
                    if (operatorInput === "+") {
                        addDisplayItem(add(firstNumInput, secondNumInput));
                        plus.style.backgroundColor = "orange";
                    } else if (operatorInput === "-") {
                        addDisplayItem(subtract(firstNumInput, secondNumInput));
                        minus.style.backgroundColor = "orange";
                    } else if (operatorInput === "*") {
                        addDisplayItem(multiply(firstNumInput, secondNumInput)); 
                    } else {
                        addDisplayItem(divide(firstNumInput, secondNumInput));
                        division.style.backgroundColor = "orange";
                    }
                    operatorInput = "*";
                } else if (event.target.textContent === "/") {
                    removeDisplayItem();
                    if (operatorInput === "+") {
                        addDisplayItem(add(firstNumInput, secondNumInput));
                        plus.style.backgroundColor = "orange";
                    } else if (operatorInput === "-") {
                        addDisplayItem(subtract(firstNumInput, secondNumInput));
                        minus.style.backgroundColor = "orange";
                    } else if (operatorInput === "*") {
                        addDisplayItem(multiply(firstNumInput, secondNumInput)); 
                        times.style.backgroundColor = "orange";
                    } else if (operatorInput === "/") {
                        addDisplayItem(divide(firstNumInput, secondNumInput));
                    }
                    operatorInput = "/";
                }
            }
            if (event.target.textContent === "+/-") {
                const displayInput = document.querySelector(".displayInput");
                if (displayInput.textContent === firstNumInput) {
                    firstNumInput = plusNegative(firstNumInput);
                    if (String(firstNumInput).length === 11) {
                        let shortenedFirstNumInput = String(firstNumInput).slice(0, -1);
                        firstNumInput = shortenedFirstNumInput;
                    }
                    displayInput.textContent = firstNumInput;
                } else {
                    secondNumInput = plusNegative(secondNumInput);
                    if (String(secondNumInput).length === 11) {
                        let shortenedSecondNumInput = String(secondNumInput).slice(0, -1);
                        secondNumInput = shortenedSecondNumInput;
                    }
                    displayInput.textContent = secondNumInput;
                }
                    specialButton.forEach(item => {
                        item.style.backgroundColor = "chocolate";
                    });
            } else if (event.target.textContent === "%") {
                const displayInput = document.querySelector(".displayInput");
                if (displayInput.textContent === firstNumInput) {
                    firstNumInput = percent(firstNumInput);
                    displayInput.textContent = firstNumInput;
                } else {
                    secondNumInput = percent(secondNumInput);
                    displayInput.textContent = secondNumInput;
                }
                    specialButton.forEach(item => {
                        item.style.backgroundColor = "chocolate";
                    });
            } else if (event.target.textContent === "A/C") {
                allClear();
                specialButton.forEach(item => {
                    item.style.backgroundColor = "chocolate";
                });
                operator.forEach(item => {
                    item.style.backgroundColor = "orange";
                });
            } else if (event.target.textContent === "=") {
                if (operatorInput != 0) {
                    removeDisplayItem();
                    if (operatorInput === "+") {
                        addDisplayItem(add(firstNumInput, secondNumInput));
                    } else if (operatorInput === "-") {
                        addDisplayItem(subtract(firstNumInput, secondNumInput));
                    } else if (operatorInput === "*") {
                        addDisplayItem(multiply(firstNumInput, secondNumInput)); 
                    } else if (operatorInput === "/") {
                        addDisplayItem(divide(firstNumInput, secondNumInput));
                    }
                    operatorInput = 0;
                }
                operator.forEach(item => {
                    item.style.backgroundColor = "orange";
                });
            }
        }
    }
});
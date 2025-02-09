// TOP caluclator script

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
        return "LOL!";
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
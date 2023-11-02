// resultado
let result = document.getElementById("result");

// input botões de numero
const numericButtons = document.querySelectorAll(".numeric-button");
for (const button of numericButtons) {
    button.addEventListener("click", () => input(button.textContent));
}

// clicar no número
const operatorButtons = document.querySelectorAll(".operator-button");
for (const button of operatorButtons) {
    button.addEventListener("click", () => inputOperator(button.textContent));
}

// Input numeros
function input(num) {
    let number = result.value;
    result.value = number + num;
}

// Input operadores
function inputOperator(operator) {
    let expression = result.value;

    // "Verifica se com um operador; se sim, substitui pelo novo operador."
    if (isOperator(expression.charAt(expression.length - 1))) {
        result.value = expression.substring(0, expression.length - 1) + operator;
    } else {
        result.value = expression + operator;
    }
}

// Checar operador (+, -, *, /)
function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

// lógica
function calc() {
    let expression = result.value;
    try {
        result.value = eval(expression);
    } catch (error) {
        alert("⚠️Algo deu errado, tente novamente");
    }
}

// resetar
function reset() {
    result.value = "";
}

// excluir 
function del() {
    let expression = result.value;
    result.value = expression.substring(0, expression.length - 1);
}

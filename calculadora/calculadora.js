// resultado
let result = document.getElementById("result");

// Botões numéricos e operadores
const numericButtons = document.querySelectorAll(".numeric-button");
const operatorButtons = document.querySelectorAll(".operator-button");

for (const button of numericButtons) {
    button.addEventListener("click", () => input(button.textContent));
}

for (const button of operatorButtons) {
    button.addEventListener("click", () => inputOperator(button.textContent));
}

// Input números e operadores
function input(inputValue) {
    result.value += inputValue;
}

function inputOperator(operator) {
    let expression = result.value;

    if (isOperator(expression.charAt(expression.length - 1))) {
        result.value = expression.substring(0, expression.length - 1) + operator;
    } else {
        result.value += operator;
    }
}

function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

// Lógica de cálculo
function calc() {
    let expression = result.value;
    if (expression === "") {
        return;
    }
    if (expression.includes('/0')) {
        alert("🤯Divisão por zero resulta no próprio número");
        return;
    }
    try {
        result.value = eval(expression);
    } catch (error) {
        alert("⚠️Algo deu errado, tente novamente");
    }
}

// Limpar e Excluir
function reset() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0, -1);
}

// Não quis deixar ele sem função nenhuma 
function showHeartAlert() {
    alert(" ♡ isso é só um enfeite, mas obrigada por usar minha calculadora ♡"); 
}

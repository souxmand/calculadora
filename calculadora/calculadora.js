// Selecionar os elementos da calculadora
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const outputSpan = document.getElementById("output");

// Adicionar event listeners aos botões
addButton.addEventListener("click", () => calculate("add"));
subtractButton.addEventListener("click", () => calculate("subtract"));
multiplyButton.addEventListener("click", () => calculate("multiply"));
divideButton.addEventListener("click", () => calculate("divide"));

// Função para realizar cálculos
function calculate(operation) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        outputSpan.textContent = "Algo deu errado, digite os números novamente";
    } else {
        switch (operation) {
            case "add":
                outputSpan.textContent = num1 + num2;
                break;
            case "subtract":
                outputSpan.textContent = num1 - num2;
                break;
            case "multiply":
                outputSpan.textContent = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    outputSpan.textContent = "Divisão por zero resulta no próprio número";
                } else {
                    outputSpan.textContent = num1 / num2;
                }
                break;
        }
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mdc(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

rl.question("Digite o primeiro número: ", (num1) => {
    rl.question("Digite o segundo número: ", (num2) => {
        let resultado = mdc(parseInt(num1), parseInt(num2));
        console.log("O MDC de " + num1 + " e " + num2 + " é: " + resultado);
        rl.close();
    });
});
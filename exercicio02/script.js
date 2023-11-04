let menorAltura = Number.MAX_VALUE;
let maiorAltura = Number.MIN_VALUE;

for (let i = 1; i <= 15; i++) {
    let altura = parseFloat(prompt(`Digite a altura ${i} (em centímetros):`));

    if (altura < menorAltura) {
        menorAltura = altura;
    }

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }
}

console.log(`A menor altura é: ${menorAltura} cm`);
console.log(`A maior altura é: ${maiorAltura} cm`);
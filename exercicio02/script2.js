let altura = 0;
let maior_altura = 0;
let menor_altura = 0;

for (let i = 1; i < 16; i++) {
    altura = +prompt("Digite sua altura, usando . para separar")
    if (altura > maior_altura) {
        maior_altura = altura
    }
    if (altura > menor_altura) {
        menor_altura = altura
    }
}

alert(maior_altura)
alert(menor_altura)
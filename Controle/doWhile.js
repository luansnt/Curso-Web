function numeroAleatorioInteiro(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao 

do {
    opcao = numeroAleatorioInteiro(-1,10)
    console.log("O numero escolhido foi " + opcao);
} while (opcao != -1);

console.log('Até a próxima');
function dinheiro(valor){
    return `R$ ${valor.toFixed(2).replace('.',',')}`
}

console.log(dinheiro(0.333333333333331));
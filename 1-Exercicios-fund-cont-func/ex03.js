function potentecia(base, expo){
    let potencia = 1

    for(let i = 0; i < expo;i++){
        potencia *= base
    } 

    return potencia
   // return Math.pow(base, expo)

}

console.log(potentecia(2,5));
console.log(potentecia(5,9));

function criarProduto (nome, preco){
    return{
        nome, 
        preco, 
        desconto: 0.1
    }
}

const prod1 = criarProduto('Celular', 1200)
console.log(prod1);
const prod2 = criarProduto('Garrafa', 50)
console.log(prod2);
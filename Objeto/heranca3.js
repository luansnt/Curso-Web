const pai = { nome: 'Pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Bianca', writable:false, enumerable:true}
})

console.log(filha2.nome);
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for( let chave in filha2){
    filha2.hasOwnProperty(chave) ? console.log(chave) : console.log(`Por herança: ${chave}`);
}
 // pessoa -> endereço de memoria -> {...}
 const pessoa = {nome: 'Joao'}
 pessoa.nome = 'Pedro'
 console.log(pessoa);

 // pessoa -> outro endereço -> {...}
 //pessoa = { nome:'Ana'}

 Object.freeze(pessoa)

 pessoa.nome = 'Maria'
 pessoa.end = 'Rua ABC'
 delete pessoa.nome
 console.log(pessoa);
const pilotos = ['Vettel', 'Alosno', 'Raikkonen', 'Massa']
pilotos.pop()
console.log(pilotos);

pilotos.push('Verstappen')
console.log(pilotos);

pilotos.shift() 
console.log(pilotos);

pilotos.unshift('Haminton')
console.log(pilotos);

pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos);

pilotos.splice(3,1)
console.log(pilotos);

const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos);

const algunsPilotos1 = pilotos.slice(1,4)
console.log(algunsPilotos1);
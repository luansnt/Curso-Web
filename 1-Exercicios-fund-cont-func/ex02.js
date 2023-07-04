function tipoDoTriangulo(x,y,z){
    if(x === y && y === z){
        return 'Triangulo Equilátero'
    }else if (x === y || x === z || z === y){
        return 'Triagulo Isósceles'
    }else{
        return 'Triangulo Escaleno'
    }
}

console.log(tipoDoTriangulo(2,2,2));
console.log(tipoDoTriangulo(2,3,2));
console.log(tipoDoTriangulo(1,4,4));
console.log(tipoDoTriangulo(1,2,3));
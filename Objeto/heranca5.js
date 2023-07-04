console.log(typeof String, typeof Array, typeof Object);

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Luan Santana'.reverse());

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,6].first());

String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('Luan Santana'.reverse());
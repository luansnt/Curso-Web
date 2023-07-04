function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function (){
        self.idade ++
        console.log(self.idade);
    }/*.bind(this)*/ ,1000) // setInterval de tempos em tempos executa a funcao contando com milisegundos
}

new Pessoa
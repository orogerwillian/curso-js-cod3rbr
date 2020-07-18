/*class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}!`)
    }
}*/

function Pessoa(nome) {
    this.nome = nome
    this.falar = () => console.log(`Meu nome é ${this.nome}!`)
}

const p1 = new Pessoa('Roger')
p1.falar()
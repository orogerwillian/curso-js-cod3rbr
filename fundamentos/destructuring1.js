// novo recurso do ES2015

const pessoa = {
    nome: 'Roger',
    idade: 28,
    endereco: {
        logradouro: 'Rua Atica',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade, '\n')

const { nome: n, idade: i } = pessoa
console.log(n, i, '\n')

const { sobronome, bemHumorada = true} = pessoa
console.log(sobronome, bemHumorada, '\n')

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep, '\n')
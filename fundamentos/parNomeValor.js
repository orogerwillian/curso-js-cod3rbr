// par nome/valor
const saudacao = 'Opa' // Contexto l�xico 1

function exec () {
    const saudacao = 'Falaa'
    return saudacao
}

// Objetos sao grupos alinhados de pares/valores
const cliente = {
    nome: 'Roger',
    idade : 25,
    peso: 90,
    endereco: {
        logradouro: 'Rua Atica',
        numero: 602
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

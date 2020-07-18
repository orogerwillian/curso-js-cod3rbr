const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const somenteNotas = alunos.map(a => a.nota)
const resultado = somenteNotas.reduce(function (acumulador, atual) {
    return acumulador + atual
}, 0)

console.log(somenteNotas)
console.log(resultado)
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const somenteAttrBolsita = alunos.map(a => a.bolsista)

// Desafio 1: Todos são bolsistas ?
const todosBolsitas = (resultado, bolsista) => resultado && bolsista
console.log(`Todos são bolsitas? ${somenteAttrBolsita.reduce(todosBolsitas)}`)

// Desafio 2: Algum aluno é bolsista ?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(`Tem algum bolsista? ${somenteAttrBolsita.reduce(algumBolsista)}`)

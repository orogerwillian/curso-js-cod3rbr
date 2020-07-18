// Clouse � o escopo criado quando uma fun��o � declarada
// Esse escopo permite a fun��o acessar e manipular vari�veis externas a fun��o

// Contexto lexico em a��o!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
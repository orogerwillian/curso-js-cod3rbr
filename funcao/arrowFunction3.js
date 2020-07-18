console.log('-------------------- USANDO FUNCTION NORMAL -------------------------------')
function compararComThis(param) {
    console.log(`${param} eh igual ao this ? ${this === param ? 'Sim' : 'Nao'}`)

}
compararComThis(global)

const obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(global)

compararComThis(obj)
console.log('\n\n-------------------- USANDO ARROW FUNCTION -------------------------------')

let comparaComThisArrow = param => console.log(`${param} eh igual ao this ? ${this === param ? 'Sim' : 'Nao'}`)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

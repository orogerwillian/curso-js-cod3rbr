// Arrow function

const soma = (a, b) => a + b
console.log(soma(1, 2))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// paremetro default
function log(text = 'Node') {
    console.log(text)
}
log('Sou mais forte')

// operador rest
function total(...numeros) {
    return numeros.reduce((acumulador, valor) => acumulador + valor)
}
console.log(total(2, 3, 4, 5))
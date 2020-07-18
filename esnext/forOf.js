for (let letra of "Coder") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}],
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let assunto of assuntosMap.keys()) {
    console.log(assunto)
}

for (let assunto of assuntosMap.values()) {
    console.log(assunto)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}
const aninimo = process.argv.indexOf('-a') !== -1
//console.log(aninimo)

if (aninimo) {
    process.stdout.write('Fala anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}
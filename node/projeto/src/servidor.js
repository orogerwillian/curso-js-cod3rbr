const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bandoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true})) // middleware for all request

app.get('/produtos', (req, res) => {
    res.send(bandoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res) => {
    res.send(bandoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = bandoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res) => {
    const produto = bandoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res) => {
    const produto = bandoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})
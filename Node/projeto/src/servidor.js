const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true })) //este middleware transforma as requisições em json 

app.get('/produtos', (req, res,  ) => {
    res.send(bancoDeDados.getProdutos()) // Send converte para JSON
})

// app.use((req, res, next) => {
//     res.send({nome: 'Notebook', preco: 123.55}) // Send converte para JSON
// }) // Atende a qualquer url

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // gera  JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // gera  JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // Manda um json
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})

const fyleSystem = require('fs');

const produto = {
    nome: 'notebook',
    preco: 2300,
    ano: 2011,
    desconto: 0.15
}

fyleSystem.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || "Arquivo salvo com sucesso")
})


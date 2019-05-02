const moduloA = require('../../moduloA')//voltando dduas pastas para importar o módulo necessário
console.log(moduloA.ola)

const saudacao = require('saudacao')//node pega o index.js
console.log(saudacao.bomDia)

const c = require('./pastaC') //não precisa especificar o caminho ezato pois o node reconhece arquivos de nome index.js
console.log(c.ola2)  

const http = require('http') //http é uma importação core do node
http.createServer((req, res) =>{
    res.write('Bom diaa!')
    res.end()
}).listen(8080) //aqui foi criado um novo servidor local na porta 8080
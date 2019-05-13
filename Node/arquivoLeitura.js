const FileSystem = require('fs') //módulo que já vem previamente instalado no node para leitura de arquivos

const caminho = __dirname + '/arquivo.json'

//ler de forma sincrona:
const conteudo = FileSystem.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Assíncrona
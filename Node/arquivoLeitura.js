const fileSystem = require('fs') //módulo que já vem previamente instalado no node para leitura de arquivos

const caminho = __dirname + '/arquivo.json'

//ler de forma sincrona:
const conteudo = fileSystem.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Assíncrona
fileSystem.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Forma mais simples de fazer, já que o arquivo é um JSON

const config = require('./arquivo.json')
console.log(config.db)

//ler todos arquivos da pasta
fileSystem.readdir(__dirname, (err, arquivos) =>{
    console.log("Consteúdo da pasta:")
    console.log(arquivos)
})


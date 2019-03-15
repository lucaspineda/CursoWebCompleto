function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 1000,
    desc: 0.15,
    getPreco
}
//Chamada normal
console.log(produto.getPreco())

//Chamada com call
console.log(getPreco.call(produto))

//Chamada com Apply
console.log(getPreco.call(produto))

//chamada com call e parametros:
console.log(getPreco.call(produto, 0.10, '$'))

//chamada com apply e parametros
console.log(getPreco.apply(produto, [0.10, '$']))


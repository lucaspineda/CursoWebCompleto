Array.prototype.map2 = function(callback){

    const novoArray = [];
    for (let index = 0; index < this.length; index++) {
        novoArray.push(callback(this[index], index, this));

    }
    return novoArray;
    
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const fazObjeto = json => JSON.parse(json);
const pegaPreco = (objeto, index) => objeto.preco;

const precos = carrinho.map2(fazObjeto).map2(pegaPreco);

console.log(precos)


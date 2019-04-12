const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const fazObjeto = json => JSON.parse(json);
const pegaPreco = objeto => objeto.preco;

const precos = carrinho.map(fazObjeto).map(pegaPreco);

console.log(precos)


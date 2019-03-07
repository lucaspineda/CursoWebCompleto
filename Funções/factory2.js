// desafio: criar uma função factory que retorna os objetos conforme parametros

function criarProduto(nome = 'Genérico', preco = 0, desconto = 0, final){
    return {
        nome,
        preco,
        desconto,
        final: function(){
            console.log (preco - desconto)
        }
    }
}

console.log(criarProduto('sabonete'))

console.log(criarProduto('bala', 22, 5))

criarProduto('bala', 22, 5).final()
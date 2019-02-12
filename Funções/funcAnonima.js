//exemplo de função anônima
const anonima = function(){
    console.log("Esta é uma função anônima")
}

anonima();

const soma = function(a,b) {
    return a + b;
} 

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(1,2, function(x,y){ //invocando uma função anonima como parametro
    return x - y;
}) //imprime - 1 pois a função anonima se refere ao parametro "operacao" do metodo acima
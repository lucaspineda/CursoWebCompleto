//exemplo de função anônima
const anonima = function(){
    console.log("Esta é uma função anônima")
}

anonima();



const imprimirResultado = function(a, b){
    //console.log(a + b)
}

imprimirResultado(1,2, function(x,y){
    return x-y
})
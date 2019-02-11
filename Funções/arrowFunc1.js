
//Esta é uma função normal
var normal = function(parametro){
    return parametro * 2
}

//Esta é uma arrow function, que tem a mesma funcionalidade da função antiga
//Foi introduzida a partir do ES6
var arrow = (parametro) => parametro * 2;

console.log(normal(10))
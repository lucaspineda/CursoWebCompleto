
let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global); //Retorna true pois com funções normais o this referencial a variavel global do node

var obj = {

}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj); //retorna true devido ao bind forçar o this a ser relativo ao obj
comparaComThis(global); //retorna falso devido a bind

comparaComThis = (param) => {
    console.log(this === param);
}
comparaComThis(obj); //Retorna false mesmo com binding, pois a arrow function é mais forte que o binding
comparaComThis(module.exports); //retorna true, pois ´o módulo atual do node

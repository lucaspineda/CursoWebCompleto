function geraNumeroInteiroComRange(min, max){
    const valor = Math.random() * (max - min) + min;
    return Math.round(valor);
}

let opcao = 0

do{
opcao = geraNumeroInteiroComRange(1,3)
console.log(opcao);
}while(opcao != 3)
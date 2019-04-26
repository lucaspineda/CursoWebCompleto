// IIFE = Immediately invoked function expression

let x = 20;
console.log(x);

(function(){
    var x = 3;
    console.log('Será executado na hora')
    console.log('foge do escopo global')
    console.log(x)
    
})()
console.log(x) // ignore escopo dentro da funcao e pega escopo de fora

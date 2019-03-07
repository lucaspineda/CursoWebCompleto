// IIFE = Immediately invoked function expression

let x = 20;

(function(){
    x = 3;
    console.log('Será executado na hora')
    console.log('foge do escopo global')
    console.log(x)
    
})()
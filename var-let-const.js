let variavelLet = 1;
variavelLet = 3 //let pode ter seu valor alterado
//let amem = 2 - Isso resulta em erro, pois não podem haver duas declarações com let em um mesmo escopo.
{
    let variavelLet = 2;
    let variavelLet2 = 2;
}
console.log('Variavel let = ' + variavelLet); // Será exibido 3, pois é considerado a variável de mesmo escopo.

//Isto resulta em erro pois variavelLet2 não está no mesmo escopo
//console.log('Variavel let = ' + variavelLet2);


var Variavelvar = 1;
{
    var Variavelvar = 2; // Não resulta em erro, pois pode ser declarada novamente em outro ou mesmo escopo
    var Variavelvar2 = 4;
    function anyFunc(){
        var Variavelvar2 = 5;
    }
}
Variavelvar = 3; // tambem pode ter seu valor alterado 

// Será exibido 3, pois é considerado o último valor da variável, independente do escopo
console.log('Variavel var = ' + Variavelvar);
 // será exibido 4, mesmo declarando a variavel fora deste escopo, mas não está dentro de uma função
console.log('Variavel var = ' + Variavelvar2);

const constVar = 1;
//const constVar = 2 - Isso resulta em erro, pois não podem haver duas declarações com const em um mesmo escopo.
//constVar = 2 - Resulta em erro pois não pode não é possivel reatribuir valores para constantes 
{
    const constVar = 2
    const constVar2 = 3
}
console.log('Variavel const: ' + constVar);

//Isto resulta em erro pois variavelLet2 não está no mesmo escopo
//console.log('Variavel const: ' + constVar2);
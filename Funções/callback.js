// Callback é uma função que é usada como "callback". Ela é tipicamente passada como argumento de outra função e/ou chamada quando um evento for acontecido, ou quando uma parte de código receber uma resposta de que estava à espera.

// Isto é muito comum em javascript lado cliente e servidor (NodeJS) mas não só. A função callback é muitas vezes assíncrona na medida em que é chamada como consequência de outro código que está a correr no background. A grande vantagem é que assim o computador pode ir processando outros processos enquanto a resposta não chega e não precisa assim de parar tudo à espera dessa resposta.

// Um exemplo clássico é um auscultador de eventos que chama uma função quando o evento acontece:

// function callback(e) {
//     alert('Aconteceu um evento ' + e.type);
// }
// window.addEventListener('click', callback);
// Este callback vai ser chamada quando fizer um click na janela. Até isso acontecer o processador vai processando outras coisas que acontecem na aplicação.

// Exemplo: http://jsfiddle.net/D2PuH/


const numeros = [1,2,3,4,5,6,7,8,9];

const numerosAte5 = numeros.filter((numero) => numero < 6); //Função callback dentro da execução do filter (arrow function)

console.log(numerosAte5);


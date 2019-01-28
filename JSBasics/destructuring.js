const pessoa = {
    nome: 'Ana',
    idade: 26,
    endereco: {
        rua: 'rua bla',
        numero: 555
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const {endereco: {rua,numero,cidade}} = pessoa;
console.log(rua, numero, cidade);
//console.log(rua, numero, cidade, estado); resulta em erro pois não estava dentro do destructuring
 
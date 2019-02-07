
const pessoa = {
    discurso: "boa tarde!!!",
    falar(){
        console.log(this.discurso)
    }
}


// pessoa.falar() -- Funciona normalmente

const falar1 = pessoa.falar;
falar1(); // não funciona, pois o this muda

 const falar2 = pessoa.falar.bind(pessoa); // Bind força o this ser relativo ao seu parâmetro (pessoa)
 falar2(); //funciona devido ao bind




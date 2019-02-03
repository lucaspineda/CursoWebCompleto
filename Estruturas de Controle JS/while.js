

function numerosAleatorionsComMax(max){
    let numero;
    while(numero != max){
        numero = Math.round(Math.random() * Math.round(max));
        console.log(numero);
    }
}

numerosAleatorionsComMax(2);



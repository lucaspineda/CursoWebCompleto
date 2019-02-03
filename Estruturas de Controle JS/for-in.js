


const pessoa = {
    nome: "Alex",
    idade: 31,
    peso: 78
}

for(let atributo in pessoa){
    console.log(atributo + ': ' + pessoa[atributo])
}
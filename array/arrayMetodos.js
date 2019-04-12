const times = ["Barça", "Real", "City", "Liverpool"]

times.pop(); //Retura o último elemento (Liverpool)
console.log(times);

times.push("Atlético"); //Adiciona o Atletico
console.log(times);

times.shift();//Remove o primeiro (Barca)
console.log(times);

times.unshift("Bayern");
console.log(times);

//splice pode adicionar e remover elementos

//adicionar
times.splice(2, 0, "Timão") // adiciona Timao antes de indice 2 (city)
console.log(times);

//remover
times.splice(3 ,2); //remove o 3  e o 4 elemento
console.log(times);

const algunsTimes = times.slice(1) //cria um novo array iniciando a partir do parametro
console.log(algunsTimes);

const algunsTimes2 = times.slice(1, 2) // cria um novo array entre 1 e até 2, mas sem adicionar o 2
console.log(algunsTimes2);


console.log(times);
function aprova(nota){
    if(nota < 4){
        console.log('Você está reprovado!!!')
    } else
    if(nota > 5){
        console.log('Você está aprovado!!!')
    } else {
        console.log('Você está de recuperação')
    }
}
aprova(2)
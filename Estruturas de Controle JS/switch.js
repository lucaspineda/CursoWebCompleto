function aprova(nota){
    switch(nota){
        case 10: case 9: console.log("Muito bem aprovado!!!")
        break;
        case 8: case 7: case 6: console.log("Aprovado")
        break;
        case 5: console.log("Aprovado por pouco")
        break;
        case 4: case 3: case 2: case 1: console.log("Reprovado")
        break;
        default: console.log("Nota inválida")
    }
}

aprova(5)

aprova(0)
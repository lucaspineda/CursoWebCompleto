function wrongFunction(obj){
    try{ //Verifica se há algum erro
        console.log(obj.nome.toUpperCase() + ' blablabla!!!');
    } catch(e){ //Caso ocorra erro executa
        getError(e);
    } finally{ //Sempre executado, independente se erro emitido
        console.log('Este é o Finally, executado com erro ou não')
    }
}

const anyObject = {
    name: "anyName"
}

wrongFunction(anyObject);

function getError(erro){
    //throw new Error('An error Ocurred');
    throw{
        nome: erro.name,
        msg: erro.message,
        data: new Date
    }
}
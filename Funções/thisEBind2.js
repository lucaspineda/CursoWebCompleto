

//NÃO FUNCIONA, POIS O THIS VARIA E FICA RELATIVO AO SET INTERVAL RESULTANDO EM NaN


// function pessoa() {
//     this.idade = 0;
//     setInterval(function(){
//         console.log(this.idade++)
//     },1000)
// }

// new pessoa

// FUNCIONA POIS COM ARROW FUNCTION O THIS É FORÇADO A SER RELATIVO A SEU CHAMADOR INICIAL (PESSOA)

// function pessoa() {
//     this.idade = 0;
//     setInterval(()=>{
//         console.log(this.idade++)
//     },1000)
// }

// new pessoa


//FUNCIONA POIS O BIND TAMBÉM FORÇA O THIS A SER RELATIVO A PESSOA

// function pessoa() {
//     this.idade = 0;
//     setInterval(function(){
//         console.log(this.idade++)
//     }.bind(this),1000)
// }

// new pessoa

// TAMBEM FUNCIONA, A CONST SELF SERVE PARA ARMAZENAR O THIS QUE ESTAVA NO ESCOPO DENTRO DE PESSOA

function pessoa() {
    this.idade = 0;
    const self = this;

    setInterval(function(){
        console.log(self.idade++)
    },1000)
}

new pessoa
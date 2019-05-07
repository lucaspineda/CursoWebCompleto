const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


  const checkFemale = pessoa => pessoa.genero === 'F'
  const chinesa = pessoa => pessoa.pais === 'China'
  const menorSalario = (funcionario, funcionarioAtual) =>{
  return (funcionario.salario < funcionarioAtual.salario) ? funcionario : funcionarioAtual
  }


  
axios.get(url).then(response => {

    funcionarios = response.data
    //Retorna a chine com menor salario
    const female = funcionarios
        .filter(chinesa)
        .filter(checkFemale)
        .reduce(menorSalario)

    console.log(female)
})


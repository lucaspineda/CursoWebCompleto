const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

function checkFemale(genero) {
    return genero === 'F';
  }

axios.get(url).then(response => {
    funcionarios = response.data
    console.log(funcionarios)
    funcionarios.filter(checkFemale)
})


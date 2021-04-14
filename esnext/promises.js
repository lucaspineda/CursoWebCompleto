function falarDepoisDe(segundos, frase) {
  console.log('chamou 2')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase)
      // reject('error!!!')
    }, segundos * 1000)
  })
}

console.log('chamou 1')
falarDepoisDe(3, 'Que legal!!!')
  .then(frase => frase.concat('!!!'))
  .then(outraFrase => console.log(outraFrase))
  .catch(error => console.log(error))
console.log('chamou 3')

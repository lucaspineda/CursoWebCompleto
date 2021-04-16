
let fs = require('fs');

const readFileWithPromise = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/texto.txt', 'utf8', function(err, data) {
      if(data) {
        resolve(data);
      } else {
        reject(err)
      }
    })
    console.log('after read')
  })
}

readFileWithPromise()
  .then(textData => console.log(textData))


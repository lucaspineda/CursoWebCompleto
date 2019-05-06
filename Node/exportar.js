console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1;
exports.b = 2
module.exports.c = 3

exports = null
//console.log(module.exports) //module.exports não é afetado pelo exports
exports = {
    teste: 'teste2'
} //não é exportado, apenas o module.exports pode redefinir o objeto, pois o exports é apenas uma referencia a ele.
module.exports = {
    teste: 'teste'
}
//console.log(exports)
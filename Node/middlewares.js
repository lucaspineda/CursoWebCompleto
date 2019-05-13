//middleware pattern (usa o conceito de chain of responsibility)

const passo1 = (ctx, next) =>{
    ctx.valor1 = 'mid1'
    next()
}
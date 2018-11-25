let valor // não inicializada
console.log(valor)

valor = null // ausencia de valor
console.log(valor)

const produto = {}
console.log(produto.preco) //aqui não está definido o preco no objeto produto
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined //*** evitar usar este tipo de atribuição(Deixe para a linguagem). Melhor definir null ***
console.log(!!produto.preco)
console.log(produto)

delete produto.preco
console.log(produto)

produto.preco = null // null é utilizado para dizer que a variável não aponta para lugar nenhum na memória
console.log(produto.preco)
console.log(!!produto.preco)
console.log(produto)

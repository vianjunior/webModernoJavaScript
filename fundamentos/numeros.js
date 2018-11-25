const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //verifica e imprime no console se o peso1 é inteiro
console.log(Number.isInteger(peso2)) //

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) //mostra o resultado até duas casas decimais

console.log(media.toString()) //converte para string e imprime
console.log(media.toString(2)) //converte em binário e imprime

console.log(typeof media) //imprime o tipo da variável ou const
console.log(typeof Number)
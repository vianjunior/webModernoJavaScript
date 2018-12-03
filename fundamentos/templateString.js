const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const nome1 = 'Template String'
const nome2 = 'Concatenar'
const nome3 = 'Certo?'
// exemplo de template string, é passado entre os sinais ``.  é como se a string fosse um bloco de código
const template = `
    Olá
    ${nome}!
`
console.log(concatenacao, template)

// digamos que a parte que precisa ser calculada dentro da template, deve ser passada no bloco do dólar.
//O que for passado dentro do bloco do dólar será INTERPOLADO / Interpretado
console.log(`1 + 1 = ${1 + 1}`)
console.log(`olá ${nome} teste de funcionalidade da fórumla 1 + 1 é = a ${1 + 1}`)
console.log(`Graças à ${nome1} eu nunca mais vou precisar ${nome2} nada na minha vida, ${nome3}
E o melhor de tudo é que dá pra quebrar a linha e continuar de boa, como se nada tivesse acontecido.....
`)
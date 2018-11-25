let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // o sinal !! verifica se a variável é verdadeira

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //se o resultado da atribuiçao for um valor true, retornará verdadeiro
console.log(!!(isAtivo = 33))// exemplo da linha acima

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) ////se o resultado da atribuiçao for um valor false, retornará falso
console.log(!!(isAtivo = 0))// exemplo da linha acima

// if testando se é verdadeiro ou falso
const testeFalso = ''

if (!!testeFalso){
    console.log('Verdadeiro')
} else {
    console.log('bait')
}

let nome = ''
console.log(nome || 'Desconhecido') // imprima nome, se for verdadeiro, OU 'Desconhecido' se for falso

nome = 'Junior'
console.log(nome || 'Desconhecido') // imprima nome, se for verdadeiro, OU 'Desconhecido' se for falso
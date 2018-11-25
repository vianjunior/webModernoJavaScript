// armazenando uma funcao em uma variavel

const imprimirSoma = function (a,b){
    console.log(a + b)
}

imprimirSoma(4, 5)

// armazenando uma arrowfunction em uma variavel

const soma = (a, b) => {
    console.log(a + b)
}

soma(5, 6)

const somaReturn = (a, b) => {
    return a + b
}

console.log(somaReturn(4, 3))

// retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(8,3))
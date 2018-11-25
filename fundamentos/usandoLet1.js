var numero = 1
//let numero = 4 se tentar declarar com let uma variavel já declarada: ERRO

// o let tem escopo de bloco. Uma variável declarada com let só pode ser usada
// dentro do bloco, mesmo est nao sendo uma funçao
{
    let numero = 2
    console.log('Dentro: ' + numero) // Priorizará a impressao do que está dentro do bloco
                        // Se nao encontrar, irá imprimir o que está fora
}

console.log('Fora: ' + numero) // irá imprimir o que está fora do bloco,
                    // uma vez que dentro do bloco foi declarado com let
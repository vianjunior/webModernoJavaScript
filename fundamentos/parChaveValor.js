// par chave/valor
const saudacao = 'Olá' //contexto léxico 1

function exec(){
    const saudacao = 'Fala' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome : 'Junior',
    idade : 24,
    peso : 87,
    endereco: {
        logradouro : 'Rua Avenida',
        numero : 1200,
        bairro : 'Nobre',
        cidade : 'Videira'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente.nome, cliente.endereco)
// objeto pode ser criado e seus atributos passados desta maneira;
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.9
prod1['Desconto Legal'] = 0.4 //evitar atributos com espaço

console.log(prod1)

// ou desta maneira (habitual)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 59.9
}

console.log(prod2)


// existe um detalhe ao trabalhar com objetos
const a = {name: 'Teste'} // digo que "a" é um objeto de nome "teste"
const b = a // aqui estou dizendo que "b" vai receber o endereço na memória, de "a"
console.log(a, b)
b.name = 'vai caralho'// uma vez que 'a' e 'b' apontam para o mesmo endereço, ao mudar o valor de um deles...
console.log(a, b) // eu mudo o valor do outro. Na verdade o valor não muda, é o valor na memória que muda.
// mas como ambos apontam para o mesmo lugar, é como se o valor de 'a' mudasse junto com 'b'
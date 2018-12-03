console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Junior'
obj1['sobrenome'] = 'Vian' // maneira alternativa de criar atributo, com valor, de um objeto

console.log(obj1.nome, obj1.sobrenome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('mesa')
const obj3 = new Obj('cadeira')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
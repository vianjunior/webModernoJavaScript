//Declarando uma variável de maneira global
{
    {
        {
            var sera = 'Será?'
        }
    }
}

console.log(sera) // Variáveis globais podem ser usadas em qualquer lugar do código


// Variáveis declaradas dentro de funçao, só podem ser usadas dentro da funçao
function teste(){
    var local = 123 
    console.log(local)
}

//console.log(local) // Aqui vai retornar um erro pois nao vai achar a variavel


// Evitar o uso de variáveis globais pois elas podem ser sobrescritas. Ex abaixo:
var sera = 'Trocou!' //Variavel será foi declarada novamente sem erro, pois é global.

console.log(sera)


const escola = 'cod3r'

console.log(escola.charAt(4)) //imprime o caractere de n 4 da const escola.
console.log(escola.charCodeAt(3)) //traz valor unicode do carectere n 3 da const escola
console.log(escola.indexOf('d')) // procura em qual índice está o carectere "d" na const
console.log(escola.substring(1)) // imprime string a partir do caractere de indice 1
console.log(escola.substring(1, 3)) // imprime a string do caractere de indice 1, parando antes do 3

//Concatenaçao
console.log('Escola ' + escola) // esta concatenaçao funciona
console.log('Escola '.concat(escola).concat('!')) // porém é mais indicado usar a funçao concat.
console.log('3' + 2)// quando existe string na equaçao, o sinal de mais prioriza a concatenaçao, não a soma

//Reposiçao
console.log(escola.replace('o', 'e')) //replace é utilizado para substituir caracteres. peimeiro o char a ser substit. segundo o que vai subs
console.log(escola.replace('d3', 'dd33'))

//Array
console.log('PatatirPatatarPessoa'.split('r'))// split usado pracriar array de uma string. O parâmetro diz onde cada item deve ser 'separado'
console.log('José,Carlos,Almeida'.split(','))// mesma coisa, aqui o split é na vírgula
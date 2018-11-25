const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)
console.log(valores[0], valores[2])

valores[4] = 10 //inserir elemento no array
console.log(valores)

valores[10] = 12
console.log(valores)

console.log(valores.length)

valores.push({id:3}, false, null, 'teste', `Teste ${1 + 1}`)// com o push eu consigo inserir vários valores dentro do array
console.log(valores)

valores.pop()// remove o último elemento do array
console.log(valores)

delete valores[1]// deleta o elemento 1 do array
console.log(valores)

console.log(typeof valores)
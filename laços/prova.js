const entrada = require('readline-sync')

//EXERCICIO 1

let num = 0
let comb = 0

for(let i = 0; i < 3; i++)
    {
      num = parseFloat(entrada.question('insira 3 numeros inteiros positivos: ')) 
      comb = (3 * 2 * 1) 
    }
    console.log(`existem ${comb} possiveis`)

//EXERCICIO 2

let votos = 0
let aluno = 0

for(let i = 0; i < 5; i++)
    {
      aluno = parseFloat(entrada.question('Nome do aluno: ')) 
      votos = ((5 * 4 * 3 * 2 * 1) / 2 * 1)
    }

console.log(`formas possiveis: ${votos}`)
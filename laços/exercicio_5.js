const entrada = require('readline-sync')

let maior_num = 0
let menor_num = 0

for(let i = 0; i < 10; i++)
{
   let num = parseFloat(entrada.question('digite um numero: '))
   if(maior_num == 0 && menor_num == 0) 
    {
     maior_num = num
     menor_num = num
    } 
    else if(num > maior_num) 
    {
        maior_num = num
    }
    else if(num < menor_num)
    {
        menor_num = num
    }
}


console.log(`Maior numero: ${maior_num}`)
console.log(`Menor numero: ${menor_num}`)
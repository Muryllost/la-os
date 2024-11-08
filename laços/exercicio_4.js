const entrada = require('readline-sync')

let maior_idade = 0

for(let i = 0; i < 10; i++)
{
   let idade = parseFloat(entrada.question('digite sua idade: '))
   if(idade >= 18)
  {
     maior_idade++
  }
}
 console.log(`${maior_idade} pessoas maiores de idade!`)


    const entrada = require('readline-sync')

 let num = 0 
 let soma = 0

 for(let i = 0; i < 10; i++)
{
    num = parseFloat(entrada.question('digite um numero: ')) 
    soma = soma + num
}
console.log(soma)
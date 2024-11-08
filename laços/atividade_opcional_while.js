const entrada = require('readline-sync')



//EXERCICIO 1-------------------------------------------------------------------------

// let repetidor = 0

// while(repetidor < 10)
// {
//     console.log('Hello World!')
//     repetidor++
// }


//EXERCICIO 2--------------------------------------------------------------------------

// let soma = 0
// let num = 1

// while(num <= 50)
// {
//    soma = soma + num
//    console.log(soma)
//    num++
// }

//EXERCICIO 3--------------------------------------------------------------------------


// let Soma = 0
// let Num = 0
// let exibir = 0

// while(exibir < 10)
// {
//     Num = parseFloat(entrada.question('digite um numero:'))
//     Soma = Soma + Num
//     exibir++
// }

// console.log(Soma)

//EXERCICIO 4--------------------------------------------------------------------------

let maior_idade = 0
let resultado = 0

while(resultado < 10)
{
    let idade = parseFloat(entrada.question('digite sua idade: '))
    if(idade >= 18)
    {
        maior_idade++
    }
    resultado++
}
console.log(`${maior_idade} pessoas maiores de idade!`)

//EXERCICIO 5---------------------------------------------------------------------------

// let maior_num = 0
// let menor_num = 0
// let numeracao = 0

// while(numeracao < 10)
// {
//     let num = parseFloat(entrada.question('digite um numero: '))

//     if(numeracao == 0) 
//     {
//      maior_num = num
//      menor_num = num
     
//     } 
//     else if(num > maior_num) 
//     {
//         maior_num = num
//     }
//     else if(num < menor_num)
//     {
//         menor_num = num
//     }
//     numeracao++
// }

// console.log(`Maior numero: ${maior_num}`)
// console.log(`Menor numero: ${menor_num}`)

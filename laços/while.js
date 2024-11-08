const entrada = require('readline-sync')

// let tentativas = 0
// while( tentativas < 3)
// {
//     let senha = entrada.question('senha: ')
    
//     if(senha == '123')
//     {
//         console.log('bem vindo')    
//         tentativas = 3
//     }

//     else
//     {
//         console.log('senha incorreta')
//         tentativas++    
//     }
  
// }

//PRATICAS EM SALA DE AULA


// ex1
let certo = false
while(!certo)
{
    let num_secreto = Math.floor(Math.random() * 10) + 1
    let palpite = parseFloat(entrada.question('digite seu palpite: '))

    if(palpite > num_secreto)
    {
        console.log('numero menor!')
    }
    else if(palpite < num_secreto)
    {
        console.log('numero maior')
    }
    else if(palpite == num_secreto){
        console.log('parabens voce')
        certo = true
    }
}


// EXERCICIO 2

let jogada = 0
let acerto = false
while (!acerto) 
{
  const dado1 = Math.floor(Math.random() * 6) + 1
  const dado2 = Math.floor(Math.random() * 6) + 1
  jogada = dado1 + dado2

   console.log(`os dados jogados sao ${dado1} e ${dado2}, que somam: ${jogada}`)

   if (jogada == 7 || jogada == 11) 
   {
    console.log('Você ganhou!')
    acerto = true

   } 
  else if (jogada == 2 || jogada == 3 || jogada == 12)
   {
    console.log('Você perdeu.')
    acerto = true
   }
   else
   {
    let continuar = entrada.question('continuar (s/n): ')
   
   if(continuar == 'n')
  {
    acerto = true
  }  
 }
}

//ex3


let num = parseFloat(entrada.question('digite um numero inteiro positivo: '))
let contagem = 0

while(num > 0)
{
  contagem = num

  if(contagem > 0)
  {
    console.log(contagem)
    contagem--
  }
  else{
    console.log('erro')
  }
  num--
}
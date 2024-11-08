// const entrada = require('readline-sync')


// let tentativas = 0
// let saldo_atual = 0

// while (tentativas < 3) 
// {
//   let senha = entrada.question('digite sua senha: ')
//   if (senha == '123') 
//   {
//     console.log('Bem-vindo!')
//     let opcao = 0
//     while (opcao !== 4) 
//     {
//       opcao = parseInt(entrada.question('1. Saque\n2. Deposito\n3. Empréstimo\n4. Sair\nDigite sua opcao: '))
//       switch (opcao) 
//       {
//         case 1:
//           let valor_saque = parseFloat(entrada.question('Digite o valor do saque: '))
//           if (valor_saque || valor_saque < 0) 
//           {
//             console.log('Valor inválido')
//           }
//           else if (valor_saque > saldo_atual) 
//           {
//             console.log('Saldo insuficiente')
//           }
//           else
//           {
//             saldo_atual -= valor_saque
//             console.log(`Novo saldo: ${saldo_atual}`)
//           }
//           break
//         case 2:
//           let valor_deposito = parseFloat(entrada.question('Digite o valor do depósito: '))
//           if (valor_deposito || valor_deposito < 0) 
//           {
//             console.log('Valor inválido')
//           }
//           else 
//           {
//             saldo_atual += valor_deposito
//             console.log(`Novo saldo: ${saldo_atual}`)
//           }
//           break
//         case 3:
//           let valor_emprestimo = parseFloat(entrada.question('Digite o valor do empréstimo: '))
//           if (valor_emprestimo || valor_emprestimo < 0) 
//           {
//             console.log('Valor inválido')
//           }
//           else if (valor_emprestimo > saldo_atual / 3) 
//           {
//             console.log('Empréstimo reprovado')
//           }
//           else 
//           {
//             saldo_atual += valor_emprestimo
//             console.log('Empréstimo aprovado')
//             console.log(`Novo saldo: ${saldo_atual}`)
//           }
//           break
//         case 4:
//           process.exit('encerrando programa...')
//           break
//         default:
//           console.log('Opção inválida')
//           break
//       }
//     }
//     break
//   }
//   else 
//   {
//     tentativas++
//     if (tentativas == 3) 
//     {
//       console.log('Número de tentativas excedido! Encerrando o sistema...')
//     }
//     else 
//     {
//       console.log('Senha incorreta!')
//     }
//   }
// }

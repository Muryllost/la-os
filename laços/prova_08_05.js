const entrada = require('readline-sync')


let total_compra = 0
let opcao = entrada.question('1. passar compra\n2. sair: ')
while (opcao !== '2') 
{
  switch (opcao) 
  {
    case '1':
      let nome = entrada.question('Digite o nome do produto: ')
      let preco = parseFloat(entrada.question('Digite o preco do produto: '))
      let quantidade = parseFloat(entrada.question('Digite a quantidade do produto: '))
      console.log(`nome: ${nome}\npreco: ${preco}\nquantidade: ${quantidade}`)

      let adicionar_outro_produto = entrada.question('Deseja adicionar outro produto? (sim/nao): ')
      if (adicionar_outro_produto == 'sim')
      {
        break
      }
      while (true)
      {
            console.log('1. Finalizar compra com desconto')
            console.log('2. Finalizar compra sem desconto')
            let opcao_finalizar = entrada.question('Digite sua opaoo: ')

        if (opcao_finalizar == '1') 
        {
            let desconto = parseFloat(entrada.question('Digite o valor do desconto: '))
            total_compra += (preco * quantidade - desconto)
            console.log(`Total da compra com desconto: ${total_compra}`)
            process.exit()
            break
        }
        else if (opcao_finalizar == '2') 
        {
            total_compra += (preco * quantidade)
            console.log(`Total da compra sem desconto: ${total_compra}`)
            process.exit()
            break
        }
      }
      default:
            console.log('opcao incorreta')
      
      case '2':
            console.log('Encerrando programa...')
            process.exit()
            break
  }
}
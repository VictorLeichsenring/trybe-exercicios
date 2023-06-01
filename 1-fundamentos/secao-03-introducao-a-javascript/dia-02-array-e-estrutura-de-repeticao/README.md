Para Fixar 1
    Altere o valor da variável menuServices para que ela passe a ter o valor “Serviços”. Isso deve ser feito através da variável menu.
    const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
    const menuServices = '';
    console.log(menuServices);

Para Fixar 2
    Adicione o valor “Contato” no final do array menu.
    const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
    console.log(menu);

Para Fixar 3
    Utilize o for para imprimir os elementos da lista groceryList através de console.log():
    const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];

Exercício 1
    Considere esse array para realizar os próximos exercícios.

    const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    Percorra o array imprimindo todos os valores contidos nele com a função console.log().

    Some todos os valores contidos no array e imprima o resultado.

    Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

    Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

    Utilizando for, descubra o maior valor contido no array e imprima-o.

    Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
    
    Desafio fatorial
    O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

    O fatorial é representado pelo sinal !
    Exemplo de 4 fatorial:
    4! = 4 x 3 x 2 x 1 = 24

    Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

    Desafio de inverter palavra
    Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

    De olho na dica 👀: Pesquise sobre os seguintes métodos: split(), reverse() e join();
    let word = 'tryber';

    Desafio dos asteriscos
    Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:
    n = 5

    *****
    *****
    *****
    *****
    *****

    Desafio da pirâmide de asteriscos
    Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
    n = 5

    *
    **
    ***
    ****
    *****

    Desafio dos asteriscos, parte 2
    Agora, inverta o lado do triângulo. Por exemplo:
    n = 5

        *
       **
      ***
     ****
    *****
    De olho na dica 👀: Esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisa de uma lógica para imprimir espaços vazios também.
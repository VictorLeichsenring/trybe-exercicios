Para Fixar 1
  Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.

Para Fixar 2
  Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
  Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
  Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

Para Fizar 3
  Você ficou responsável por conferir a lista de pessoas convidadas de uma festa de casamento e precisa verificar se o nome da pessoa está ou não na lista. Para isso, você deve utilizar o código abaixo e desenvolver sua lógica a partir dele:
    O nome das pessoas convidadas está salvo em um array chamado names;
    A função hasName é responsável por verificar se o nome da pessoa está ou não na lista. Essa função recebe dois parâmetros: arr, que é o array com o nome das pessoas convidadas, e name, que é o nome a ser verificado na lista de convidados (array names).
  Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false.

  Você ficou responsável por criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade. Você deve utilizar o array people e desenvolver a sua lógica a partir dele. Para isso:
    Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;
    Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.

Exercicios
  Parte 1
    Nova Pessoa contratada
      Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:
        crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;
        utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.
    Sorteador de loteria
      Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).
    Corretor automático de exame
      Crie uma HOF que receberá três parâmetros:
        O primeiro será um array de respostas corretas (soluções);
        O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
        O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
          Uma resposta correta adiciona 1 ponto à pontuação final;
          A ausência de uma resposta não altera a pontuação (quando for “N.A”);
          Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
        Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:
  Parte II - Organizando uma biblioteca
    Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.
    Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código-base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função vazia.
    Por exemplo, o exercício 1 deve ser salvo no arquivo exercise1.js, e assim por diante.
    Organizando uma biblioteca
    Estes exercícios praticam os conceitos de Higher Order Functions associados a outros temas de fundamentos já vistos, como arrow functions, template literals e objetos. Essa mistura de conceitos é muito importante para o seu aprendizado, então use tudo o que sabe para resolver os exercícios!
      Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
      Retorne o nome do livro com menor número de caracteres (menor nome).
      Encontre o primeiro livro cujo nome possua 26 caracteres.
      Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
      Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
      Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
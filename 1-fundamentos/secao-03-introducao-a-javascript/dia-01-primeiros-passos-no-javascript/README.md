Para Fixar 1
    Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina);
    Crie uma constante chamada birthCity e atribua a ela a sua cidade natal;
    Crie uma constante chamada birthYear e atribua a ela o ano em que você nasceu;
    Utilize o console.log() para imprimir as variáveis que você criou.

Para Fixar 2
    Crie uma constante chamada base e atribua a ela o valor 5;
    Crie uma constante chamada height e atribua a ela o valor 8;
    Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela height;
    Crie uma constante chamada perimeter e atribua a ela o resultado da soma de todos os lados de um retângulo.

Para Fixar 3
    Crie uma variável chamada grade que receba a nota de uma pessoa candidata em um desafio técnico e atribua um valor entre 1 e 100;
    Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se está na lista de espera. Para isso, considere estas informações.
        Se grade for maior ou igual a 80, armazene na variável message: “Parabéns, você faz parte do grupo de pessoas aprovadas!”;
        Se grade for menor que 80 e maior ou igual a 60, armazene na variável message: “Você está na nossa lista de espera.”;
        Se grade for menor que 60, armazene na variável message: “Infelizmente, você reprovou.”.
    ➡️ Crie uma estrutura condicional utilizando if, else if e else para criar o seu algoritmo e os operadores lógicos que se aplicam a cada situação.
    ➡️ Altere o valor da nota para verificar se as condições que você implementou funcionam.

Para Fixar 4
    Crie uma variável chamada currentHour que receba um número entre 1 e 24, conforme sua escolha, para representar as horas do dia;
    Crie uma variável chamada message que inicialmente seja uma string vazia;
    Implemente as seguintes condicionais:
        Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável message;
        Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável message;
        Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável message;
        Se o horário for maior ou igual a 11 e menor que 14, insira “Hora do almoço!!!” na variável message;
        Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável message.
    Agora, imprima a variável message fora das suas condições.

Exercicio 1
    Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:

    Adição (num1 + num2)
    Subtração (num1 - num2)
    Multiplicação (num1 * num2)
    Divisão (num1 / num2)
    Módulo (num1 % num2)

Exercicio 2
    Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

Exercicio 3
    Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

Exercicio 4
    Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
    👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

Exercicio 5
    Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

    Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
    ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

    Exemplo: Bispo -> Diagonais.

Exercicio 6
    6 - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
    Faça esse exercício utilizando somente um if.

Exercício 7
    Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

    Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

    ⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

    Para as faixas de impostos, use as seguintes referências:

    INSS
    Salário bruto até R$ 1.556,94: alíquota de 8%;
    Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
    Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
    Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
    IR
    Até R$ 1.903,98: isento de imposto de renda;
    De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
    De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
    De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
    Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
    O cálculo deve ser o demonstrado a seguir
    O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

    Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

    Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

    R$ 2.670,00 - salário com INSS já deduzido;
    7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
    R$ 142,80 - parcela a ser deduzida do imposto de renda.
    Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

    Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

    Resultado: R$ 2.612,55.

    👀 Dica: Que tal identificar as alíquotas com variáveis de nomes explicativos?
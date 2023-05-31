//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

//Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
//⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

let peça= 'peão';
peça = peça.toLowerCase();
let movimentos= '';

switch (peça) {
    case 'rei' :
        movimentos = 'Pode mover-se em qualquer direção, porém apenas uma casa por vez.';
        console.log(movimentos);
        break;
    case 'dama':
        movimentos = 'Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.';
        console.log(movimentos);
        break;
    case 'torre':
        movimentos = 'Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.';
        console.log(movimentos);
        break;
    case 'bispo':
        movimentos = 'Move-se na diagonal, quantas casas quiser.';
        console.log(movimentos);
        break;
    case 'cavalo':
        movimentos = 'É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.';
        console.log(movimentos);
        break;
    case 'peão':
        movimentos = 'Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.';
        console.log(movimentos);
        break;


    default :
        console.log ('Não foi atribuido um valor correspondente a uma peça de xadres')
}
//6 - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
//Faça esse exercício utilizando somente um if.

let num1 =5;
let num2 = 10;
let num3 = 19;
let temPar = false;

if ((num1 %2 == 0) || (num2 %2 == 0) || (num3%2 == 0)) {
    temPar = true;
};

console.log(temPar)
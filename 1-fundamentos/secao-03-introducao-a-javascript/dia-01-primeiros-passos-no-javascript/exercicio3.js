//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.
num1 = 14;
num2 =18;
num3 = 18;
let maior='';

if ((num1 === num2) && (num1 ===3)) {
    maior = 'Os 3 números são iguais';
}
else if ((num1 === num2) && (num1 > num3)) {
    maior = 'O primeiro e o segundo número são iguais e maiores do que o terceiro';
}
else if ((num1 === num2) && (num1 < num3)) {
    maior = 'O primeiro e o segundo número são iguais e menores do que o terceiro';
}
else if ((num1 === num3) && (num1 > num2)) {
    maior = 'O primeiro e o terceiro número são iguais e maiores do que o segundo';
}
else if ((num1 === num3) && (num1 < num2)) {
    maior = 'O primeiro e o terceiro número são iguais e menores do que o segundo';
}
else if ((num2 === num3) && (num2 > num1)) {
    maior = 'O segundo e o terceiro número são iguais e maiores do que o primeiro';
}
else if ((num2 === num3) && (num2 < num1)) {
    maior = 'O segundo e o terceiro número são iguais e menores do que o primeiro';
}
else if ((num1 > num2) && (num1 > num3)) {
    maior = 'O primeiro número é o maior'
}
else if ((num2 > num1) && (num2 > num3)) {
    maior = 'O segundo número é o maior'
}
else if ((num3 > num2) && (num3 > num1)) {
    maior = 'O terceiro número é o maior'
}
console.log(maior);
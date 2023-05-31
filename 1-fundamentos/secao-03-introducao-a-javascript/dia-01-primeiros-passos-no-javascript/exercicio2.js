//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

num1 = 16;
num2 = 16;

let maior;

if (num1 > num2) {
    maior = num1
}
else if (num1 < num2) {
    maior = num2
}

else {
    maior= 'São iguais'
}

console.log (maior)
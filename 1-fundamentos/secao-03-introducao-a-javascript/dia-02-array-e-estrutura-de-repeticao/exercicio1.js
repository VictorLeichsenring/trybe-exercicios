const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
for (let i=0; i < numbers.length; i ++) {
    console.log(numbers[i])
}


// Some todos os valores contidos no array e imprima o resultado.
let somaNumbers=0;
for (let i=0; i < numbers.length; i ++) {
    somaNumbers +=numbers[i]
}
console.log(somaNumbers)
// Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let mediaNumbers = somaNumbers/numbers.length
console.log(`A média é ${mediaNumbers}`)

// Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.
if (mediaNumbers > 20) {
    console.log ('O valor da média aritmética é maior que 20')
} else {
    console.log('O valor da média aritmética é menor ou igual a 20');
}
// Utilizando for, descubra o maior valor contido no array e imprima-o.
let maior = 0;

for (let i=0; i < numbers.length; i ++) {
    if (numbers[i]>maior) {
        maior = numbers[i]
    } 
}
console.log(`O maior número da sequência é ${maior}`)
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
let impares = [];
for (let i=0; i < numbers.length; i ++) {
    if (numbers[i]%2 !=0) {
        impares.push(numbers[i])
    } 
}
if (impares.length >0) {
    console.log(`Os números a seguir são impares: ${impares}`)
} else {
    console.log('Nenhum valor ímpar encontrado')
}

//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
let fatorial10=1;
for (i=1;i<=10;i++) {
    fatorial10 *= i
}
console.log (`O fatorial de 10 é ${fatorial10}`)

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let palavraInvertida='';
for(let i=word.length-1; i>=0; i--) {
    palavraInvertida +=word[i]
}
console.log(`O contrário de ${word} é ${palavraInvertida}`);

//Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

let nAsterisco = 5;
for (let ilinha = 1; ilinha <= nAsterisco; ilinha++) {
    let linhaAsterisco= '';
    for (let icoluna=1;icoluna<=nAsterisco;icoluna++) {
        linhaAsterisco+='* '
    }
    console.log (linhaAsterisco)
}

//Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let nPiramideAsterisco = 5;
for (let ilinha =1; ilinha<=nPiramideAsterisco;ilinha++) {
    let linhaAsterisco='';
    for(let icoluna = 1; icoluna <= ilinha; icoluna++) {
        linhaAsterisco +='* '
    }
    console.log(linhaAsterisco)
}


//Agora, inverta o lado do triângulo. Por exemplo:

let nPiramideInvertida = 5;
for (let ilinha = 1; ilinha <= nPiramideInvertida; ilinha++) {
    let linhaAsterisco= '';
    for (let icoluna=1;icoluna<=nPiramideInvertida;icoluna++) {
        if (icoluna <=(nPiramideInvertida-ilinha)) {
            linhaAsterisco += ' '
        }else {
           linhaAsterisco+='*' 
        }
        
    }
    console.log(linhaAsterisco)
}
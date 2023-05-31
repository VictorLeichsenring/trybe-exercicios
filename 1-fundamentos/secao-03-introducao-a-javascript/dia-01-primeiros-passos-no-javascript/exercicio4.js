//Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

//👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

angulo1 = 190;
angulo2 = 50;
angulo3 = 60;
let eTriangulo;
let mensagem =  '';

if ((angulo1>=180)||(angulo2>=180)||(angulo3>=180)||(angulo1<=0)||(angulo2<=0)||(angulo3<=0)) {
    mensagem = 'Um dos angulos é inválido pois é zero ou negativo, ou é maior ou igual a 180º';
    eTriangulo = false;
    console.log (eTriangulo);
    console.log (mensagem);
}
else if ((angulo1 + angulo2 + angulo3) >180) {
    eTriangulo = false;
    console.log(eTriangulo);
}
else {
    eTriangulo = true;
    console.log (eTriangulo);
};
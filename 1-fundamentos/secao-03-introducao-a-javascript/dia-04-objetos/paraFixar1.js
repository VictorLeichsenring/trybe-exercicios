//Exercício 1
//Crie uma variável chamada player e atribua a ela um objeto que reúna todas as informações das variáveis listadas.
// const name = 'Marta';
// const lastName = 'Silva';
// const age = 34;
// const medals = { golden: 2, silver: 3 };
// const bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
// Exercício 2
// Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave, concatene as informações e armazene na variável message no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

// Exercício 3
// Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e armazene na variável achievements a quantidade de títulos no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

const player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

const message = `A jogadora ${player.name} tem ${player.age} de idade`;
const achievements = `A jogadora ${player.name} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`;

console.log(message);
console.log(achievements);
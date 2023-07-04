const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const verificaNome = arr.some((nome) => nome === name );
  return verificaNome;
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

  function verifyAges(itens, idade) {
    const ages = Object.values(itens).every((pessoa) => pessoa.age >= idade);
    return ages;
  }

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));

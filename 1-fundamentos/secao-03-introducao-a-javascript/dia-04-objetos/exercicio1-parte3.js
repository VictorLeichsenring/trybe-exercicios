const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

// Crie uma função que obtenha o valor da chave de acordo com sua posição no array.
function getValue (school, index) {
    return Object.values(school.lessons[index])
}
console.log(getValue(school,1));

// Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
function totalEstudents (school) {
    let sumValues=0;
    for (let i = 0; i < Object.values(school.lessons).length; i += 1) {
        sumValues += school.lessons[i].students; 
    };
    return sumValues;
}
console.log(totalEstudents(school));


// Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
function keyExist(school, chave) {
    contador = 0;
    for(let i = 0; i < school.lessons.length; i +=1) {
        let chavesAComparar = (Object.keys(school.lessons[i]));
        if(chavesAComparar.includes(chave)) {
            contador +=1;
        }
    }
    return contador === 4;
}

console.log(keyExist(school, 'professor'));

// Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.
//Adicione as propriedades email, fone, userGithub e linkedIn ao objeto customer (do exemplo anterior), chamando a função addProperty.

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };

function addProperty(object, key, value) {
    if (typeof(object[key]) === 'undefined' ) {
        object[key] = value;
    }
}

addProperty(customer, 'email', 'teste@teste.com' );
addProperty(customer, 'fone', '(42)299329932');
addProperty(customer, 'userGitHub', 'user1')
addProperty(customer, 'linkedIn', 'https://linkedin')

console.log(customer)
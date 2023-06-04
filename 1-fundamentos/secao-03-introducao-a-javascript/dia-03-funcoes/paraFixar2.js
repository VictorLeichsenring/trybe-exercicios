//Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, imprimir a mensagem: “O parâmetro passado deve ser do tipo string”.

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer (customer) {
    if (typeof(customer) != 'string') {
        return 'O parâmetro passado deve ser do tipo string';
    }
    trybeBankCustomers.push(customer);
    return 'Adicionado com sucesso';
};

//Agora iremos escrever uma função chamada addCustomers que irá adicionar um array de novas pessoas clientes ao nosso array trybeBankCustomers.
//Certifique-se de que somente sejam adicionados ao array trybeBankCustomers valores do tipo string. Caso o parâmetro não seja do tipo string, imprimir a mensagem: “Todos os valores precisam ser strings.”.

function addCustomers(customers, newCustomers) {
  for (let index = 0; index < newCustomers.length; index += 1) {
    if (typeof newCustomers[index] === 'string') {
      customers.push(newCustomers[index]);
    } else {
      return 'Todos os valores precisam ser strings.';
    }
  }
return trybeBankCustomers;
};

console.log(addCustomers(trybeBankCustomers, ['Carolina', 'Adamastor']));
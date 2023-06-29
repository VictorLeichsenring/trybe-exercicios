const {myFizzBuzz} = require('./myFizzBuzz');

describe('Testa a função myFizzBus', () => {
  test ('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test ('Caso num seja um número divisível apenas por 3, a função retorna "fizz"', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  test ('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
    expect (myFizzBuzz(10)).toBe('buzz');
  });

  test('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });

  test('Caso num não seja um número, a função retorna false.', () => {
    expect(myFizzBuzz('a')) . toBe(false);
  });
})




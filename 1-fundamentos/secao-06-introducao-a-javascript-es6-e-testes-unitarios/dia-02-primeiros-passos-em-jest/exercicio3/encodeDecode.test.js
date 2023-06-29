const {encode, decode} = require('./encodeDecode');

describe('Teste da Função encode', () => {
  test('Teste se encode e decode são funções.', () => {
    expect(typeof encode) .toBe('function');
  });

  test ('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.', () => {
    expect(encode('aeiou')) .toBe('12345');
  });

  test ('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
    expect(encode('bcdfghjklmnpqrstvxwyz')) .toBe('bcdfghjklmnpqrstvxwyz')
  });

  test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('Ola meu nome é victor').length) . toBe(21);
  });
});

describe ('Teste da função decode', () => {
  test ('Teste se encode e decode são funções.', () => {
    expect(typeof decode) .toBe('function');
  });

  test ('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
    expect(decode('12345')) .toBe('aeiou');
  });

  test ('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
    expect(decode('06789')) .toBe('06789');
  });

  test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decode('4l1 m25 n4m2 2 v3ct4r').length) . toBe(21);
  });
});
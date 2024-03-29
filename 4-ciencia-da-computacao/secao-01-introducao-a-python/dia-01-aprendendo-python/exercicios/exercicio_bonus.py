# Exercicio 1
# Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.

def retorna_menor_elemento(list):
  return min(list)

lista_exemplo = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

# Exercicio 2
# Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos de base.

def imprime_triangulo(n):
  for index in range(n):
    print('*' * (index + 1))
    

# Exercicio 3
# Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.

def soma_numeros(n):
  soma = 0
  for numero in range(1, n+1):
    soma += numero
  return soma

# Exercicio 4
# Um posto está vendendo combustíveis com a seguinte tabela de descontos:
#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
# Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.

def abastece(litros, combustivel):
  gasolina = 2.50
  alcool = 1.90
  if(combustivel == 'A'):
    if(litros < 20):
      return (litros * (alcool - (3/100 * alcool)))
    else:
      return (litros * (alcool - (5/100 * alcool)))
  else:
    if(litros < 20):
      return (litros * (gasolina - (4/100 * gasolina)))
    else:
      return (litros * (gasolina - (6/100 * gasolina)))
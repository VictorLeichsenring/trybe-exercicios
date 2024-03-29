# Exercicio 3
# Faça um programa que dado um valor n qualquer tal que n > 1 imprima na tela um quadrado feito de asteriscos de lado de tamanho n

def cria_quadrado (n):
  for item in range(n):
    print('*' * n)
    
cria_quadrado(10)
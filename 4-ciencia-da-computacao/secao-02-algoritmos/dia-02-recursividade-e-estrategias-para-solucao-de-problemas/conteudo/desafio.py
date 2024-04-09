# Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele.

def soma_numeros_antecessores(n):
  if n == 1:
    return 1
  else:
    return n + soma_numeros_antecessores(n - 1)
  
print(soma_numeros_antecessores(4))
# Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).

def conta_par(n):
  quantidade_pares = 0
  for numero in range(1, n + 1):
    if numero % 2 == 0:
      quantidade_pares += 1
  return quantidade_pares
# Transforme o algoritmo criado acima em recursivo.

def conta_par(n):
  if n == 0:
    return n
  elif n % 2 == 0:
    return 1 + conta_par(n-1)
  else:
    return conta_par(n-1)

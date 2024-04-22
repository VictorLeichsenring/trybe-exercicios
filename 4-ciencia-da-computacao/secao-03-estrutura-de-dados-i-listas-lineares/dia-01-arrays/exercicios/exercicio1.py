def verifica_instabilidade(valores):
  resultado = 0
  atual = 0
  for valor in valores:
    if valor == 1:
      atual += 1
      
    if atual > resultado:
      resultado = atual
    else:
      atual = 0
  return resultado

valores_coletados_1 = [0, 1, 1, 1, 0, 0, 1, 1]
valores_coletados_2 = [1, 1, 1, 1, 0, 0, 1, 1]

print(verifica_instabilidade(valores_coletados_1))
print(verifica_instabilidade(valores_coletados_2))
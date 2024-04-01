# Exercicio 3
# cria programa que le informações, aplique filtro e escreva nome em outro arquivo de acordo com a nota minima para aprovação

reprovados = []

notas = open('file.txt', mode='r')

for line in notas:
  dados = line.split(' ')
  name = dados[0]
  nota = int(dados[1])
  if nota < 6:
    reprovados.append(name)
    
notas.close()

with open('reprovados.txt', mode='w') as file:
  
  if len(reprovados) > 0:
    for item in reprovados:
      print(item, file=file)

file.close
# Exercicio 4
# Crie um função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres

names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def retorna_maio_nome (list):
  maior_nome = ''
  for item in list:
    if len(item) > len(maior_nome):
      maior_nome = item
  return maior_nome;

print(retorna_maio_nome(names))
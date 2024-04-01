quantidade_user = input('Quantos arquivos você quer gerar: ')
if(quantidade_user.isdigit()):
  quantidade = int(quantidade_user)
  for numero in range(1, quantidade + 1):
    arquivo = open(f'arquivo{numero}.txt', mode='w')
    arquivo.write(f'Esse é o arquivo de número {numero}.')
    arquivo.close()
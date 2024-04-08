from collections import Counter


class estatistica:
  def __init__(self, numbers):
    self.numbers = numbers
  
  def media(self):
    return sum(self.numbers / len(self.numbers))
  
  def mediana(self):
    lista_ordenada = sorted(self.numbers)
    quantidade = len(lista_ordenada)
    numero_meio = quantidade // 2
    if quantidade % 2 == 0:
      return(lista_ordenada[numero_meio - 1] + lista_ordenada[numero_meio + 1] / 2)
    return (lista_ordenada[numero_meio])

  def moda(self):
    number, _ = Counter(self.numbers).most_common()[0]
    return number
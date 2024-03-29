# Exercicio 6
# Crie uma função que receba os três lados de um triângulo e informe qual tipo de triângulo formado ou "não é triangulo", caso não seja possível formar um triângulo

def tipo_triangulo(a, b, c):
  if (a + b > c or a +c > b or b + c > a):
    if(a == b == c):
      return 'triângulo equilátero'
    elif(a != b != c):
      return 'triângulo Escaleno'
    else:
      return 'triangulo Isósceles'
  else:
    return 'não é triângulo'

print(tipo_triangulo(20,10,40))
print(tipo_triangulo(20,20,40))
print(tipo_triangulo(60,60,60))
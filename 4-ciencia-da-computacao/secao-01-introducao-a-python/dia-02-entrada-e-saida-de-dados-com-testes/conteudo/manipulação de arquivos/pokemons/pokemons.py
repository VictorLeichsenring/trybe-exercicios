import json

with open('pokemons.json') as file:
  # content = file.read()
  # pokemons = json.loads(content)['results']
  
  pokemons = json.load(file)["results"]

# Separamos somente os do tipo grama
grass_type_pokemons = []
for pokemon in pokemons:
    if "Grass" in pokemon["type"]:
        grass_type_pokemons.append(pokemon)

# Abre o arquivo para escrevermos apenas o pokemons do tipo grama
with open("grass_pokemons.json", "w") as file:
  # json_to_write = json.dumps(
  #       grass_type_pokemons
  #   )  # conversão de Python para o formato json (str)
  #   file.write(json_to_write)
    json.dump(grass_type_pokemons, file)
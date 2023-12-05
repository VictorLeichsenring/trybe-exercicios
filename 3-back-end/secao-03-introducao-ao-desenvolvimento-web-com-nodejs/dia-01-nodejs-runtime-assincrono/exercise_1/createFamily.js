const fs = require('fs').promises;

async function createFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id > 0 && simpson.id <= 4);
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArray));
}

async function main() {
  await createFamily();
}

main();
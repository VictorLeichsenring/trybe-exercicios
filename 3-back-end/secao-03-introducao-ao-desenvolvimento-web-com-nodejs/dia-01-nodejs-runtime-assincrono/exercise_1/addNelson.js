const fs = require('fs').promises;

async function addNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json');
  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({id: '8', name: 'Nelson Muntz'})
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))
};

async function main() {
  await addNelson();
};

main();
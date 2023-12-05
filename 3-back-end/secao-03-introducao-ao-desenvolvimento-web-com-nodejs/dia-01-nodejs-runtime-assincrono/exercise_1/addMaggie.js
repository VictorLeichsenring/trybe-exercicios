const fs = require('fs').promises;

async function addMaggie() {
  const fileContent = await fs.readFile('./simpsonsFamily.json');
  const simpsonsFamily = JSON.parse(fileContent);
  const simpsonsWithoutNelson = simpsonsFamily.filter((simpson) => simpson.id !== '8');
  const maggie = { id: '15', name: 'Maggie Simpson' }
  const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, maggie ]
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie))
}

async function main() {
  await addMaggie();
};

main();
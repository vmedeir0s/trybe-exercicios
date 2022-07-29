const fs = require('fs').promises;

async function lerPersonagens() {
  const readfile = await fs.readFile('./simpsons.json', 'utf-8');
  const arquivoJson = JSON.parse(readfile);
  arquivoJson.map(({id, name}) => console.log(`${id} - ${name}`));
  // console.log(arquivoJson);
}

lerPersonagens();
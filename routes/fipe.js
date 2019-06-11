const rp = require('request-promise');
const router = require('express').Router();

let marcasDisponiveis = {};

async function fetchMarcas() {
  const options = {
    uri: 'https://fipeapi.appspot.com/api/1/carros/marcas.json',
    method: 'GET',
    json: true,
  };
  try {
    marcasDisponiveis = await rp(options);
  } catch (err) {
    console.log(err);
  }
}

router.get('/marcas', fetchMarcas, (req, res) => res.send(marcasDisponiveis));
module.exports = router;

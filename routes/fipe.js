const rp = require('request-promise');
const router = require('express').Router();

let tipos = ['carros', 'motos', 'caminhoes'];
let marcasDisponiveis = {};
let veiculosDisponiveis = {};
let modelosDisponiveis = {};
let veiculo = {};

const makeRequest = async (path) => {
  let result;
  const options = {
    uri: 'https://fipeapi.appspot.com/api/1/' + path,
    method: 'GET',
    json: true,
  };
  try {
    result = await rp(options);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  return result;
};

const fetchMarcas = (req, res, next) => {
  const { tipo } = req.query;
  marcasDisponiveis = makeRequest(`${tipo}/marcas.json`);
  next();
};

const fetchVeiculos = async (req, res, next) => {
  const { tipo, id } = req.query;
  veiculosDisponiveis = makeRequest(`${tipo}/veiculos/${id}.json`);
  next();
};

const fetchModelos = async (req, res, next) => {
  const { tipo, id, idModelo } = req.query;
  modelosDisponiveis = makeRequest(`${tipo}/veiculo/${id}/${idModelo}.json`);
  next();
};

const fetchVeiculo = async (req, res, next) => {
  const { tipo, id, idModelo, idAno } = req.query;
  veiculo = makeRequest(`${tipo}/veiculo/${id}/${idModelo}/${idAno}.json`);
  next();
};

router.get('/marcas', fetchMarcas, (req, res) => res.send(marcasDisponiveis));
router.get('/veiculos', fetchVeiculos, (req, res) => res.send(veiculosDisponiveis));
router.get('/modelos', fetchModelos, (req, res) => res.send(modelosDisponiveis));
router.get('/veiculo', fetchVeiculo, (req, res) => res.send(veiculo));

module.exports = router;

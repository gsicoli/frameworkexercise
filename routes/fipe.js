const rp = require('request-promise');
const router = require('express').Router();

const tipos = ['carros', 'motos', 'caminhoes'];
let marcasDisponiveis = [];
let veiculosDisponiveis = [];
let modelosDisponiveis = [];
let veiculo = {};

const makeRequest = (path) => {
  const options = {
    uri: 'https://fipeapi.appspot.com/api/1/' + path,
    method: 'GET',
    json: true,
  };
  return rp(options);
};

const fetchMarcas = async (req, res, next) => {
  let err;
  try {
    const { tipo } = req.query;
    marcasDisponiveis = await makeRequest(`${tipo}/marcas.json`);
  } catch (e) {
    err = e;
  } finally {
    next(err);
  }
};

const fetchVeiculos = async (req, res, next) => {
  let err;
  try {
    const { tipo, id } = req.query;
    veiculosDisponiveis = await makeRequest(`${tipo}/veiculos/${id}.json`);
  } catch (e) {
    err = e;
  } finally {
    next(err);
  }
};

const fetchModelos = async (req, res, next) => {
  let err;
  try {
    const { tipo, id, idModelo } = req.query;
    modelosDisponiveis = await makeRequest(`${tipo}/veiculo/${id}/${idModelo}.json`);
  } catch (e) {
    err = e;
  } finally {
    next(err);
  }
};

const fetchVeiculo = async (req, res, next) => {
  let err;
  try {
    const { tipo, id, idModelo, idAno } = req.query;
    veiculo = await makeRequest(`${tipo}/veiculo/${id}/${idModelo}/${idAno}.json`);
  } catch (e) {
    err = e;
  } finally {
    next(err);
  }
};

router.get('/tipos', (req, res) => res.send(tipos));
router.get('/marcas', fetchMarcas, (req, res) => res.send(marcasDisponiveis));
router.get('/veiculos', fetchVeiculos, (req, res) => res.send(veiculosDisponiveis));
router.get('/modelos', fetchModelos, (req, res) => res.send(modelosDisponiveis));
router.get('/veiculo', fetchVeiculo, (req, res) => res.send(veiculo));

module.exports = router;

const rp = require('request-promise');
const router = require('express').Router();

const categories = ['carros', 'motos', 'caminhoes'];
let availableBrands = [];
let availableVehicles = [];
let availableModels = [];
let vehicle = {};

const makeRequest = (path) => {
  const options = {
    uri: 'https://fipeapi.appspot.com/api/1/' + path,
    method: 'GET',
    json: true,
  };
  return rp(options);
};

const fetchBrands = async (req, res, next) => {
  let err;
  try {
    const { category } = req.query;
    availableBrands = await makeRequest(`${category}/marcas.json`);
  } catch (e) {
    err = e;
  } finally {
    next(err);
  }
};

const fetchVehicles = async (req, res, next) => {
  let err;
  try {
    const { category, id } = req.query;
    availableVehicles = await makeRequest(`${category}/veiculos/${id}.json`);
  } catch (e) {
    err = e;
  } finally {
    next(err);
  }
};

const fetchModels = async (req, res, next) => {
  let err;
  try {
    const { category, id, idModel } = req.query;
    availableModels = await makeRequest(`${category}/veiculo/${id}/${idModel}.json`);
  } catch (e) {
    err = e;
  } finally {
    next(err);
  }
};

const fetchVehicle = async (req, res, next) => {
  let err;
  try {
    const { category, id, idModel, idYear } = req.query;
    vehicle = await makeRequest(`${category}/veiculo/${id}/${idModel}/${idYear}.json`);
  } catch (e) {
    err = e;
  } finally {
    next(err);
  }
};

router.get('/categories', (req, res) => res.send(categories));
router.get('/brands', fetchBrands, (req, res) => res.send(availableBrands));
router.get('/vehicles', fetchVehicles, (req, res) => res.send(availableVehicles));
router.get('/models', fetchModels, (req, res) => res.send(availableModels));
router.get('/vehicle', fetchVehicle, (req, res) => res.send(vehicle));

module.exports = router;

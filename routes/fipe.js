const rp = require('request-promise');
const router = require('express').Router();

const categories = ['carros', 'motos', 'caminhoes'];

// These is only used to exercize the idea of 'next' to handle routes
const results = {
  availableBrands: [],
  availableVehicles: [],
  availableModels: [],
  vehicle: {},
};

const makeRequest = async (path, resultName, next) => {
  let err;
  const options = {
    uri: 'https://fipeapi.appspot.com/api/1/' + path,
    method: 'GET',
    json: true,
  };

  // try..catch blocks are necessary inside async functions.
  // uncomment line below to see an error not being caught by default error handling route
  // throw 'anything';
  try {
    results[resultName] = await rp(options);
  } catch (e) {
    err = e;
  } finally {
    next(err);
  }
};

const fetchBrands = (req, res, next) => {
  const { category } = req.query;
  makeRequest(`${category}/marcas.json`, 'availableBrands', next);
};

const fetchVehicles = (req, res, next) => {
  const { category, id } = req.query;
  makeRequest(`${category}/veiculos/${id}.json`, 'availableVehicles', next);
};

const fetchModels = (req, res, next) => {
  const { category, id, idModel } = req.query;
  makeRequest(`${category}/veiculo/${id}/${idModel}.json`, 'availableModels', next);
};

const fetchVehicle = (req, res, next) => {
  const { category, id, idModel, idYear } = req.query;
  makeRequest(`${category}/veiculo/${id}/${idModel}/${idYear}.json`, 'vehicle', next);
};

router.get('/categories', (req, res) => res.send(categories));
router.get('/brands', fetchBrands, (req, res) => res.send(results.availableBrands));
router.get('/vehicles', fetchVehicles, (req, res) => res.send(results.availableVehicles));
router.get('/models', fetchModels, (req, res) => res.send(results.availableModels));
router.get('/vehicle', fetchVehicle, (req, res) => res.send(results.vehicle));

module.exports = router;

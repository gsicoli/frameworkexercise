const router = require('express').Router();
const { models } = require('../src/models');

const createVeiculo = async (req, res) => {
  const veiculo = new models.Veiculo(req.body);
  await veiculo.save();
  res.sendStatus(200);
};

const getAllVeiculos = async (req, res) => {
  const veiculos = await models.Veiculo.find();
  res.send(veiculos);
};

router.post('/', createVeiculo);
router.get('/', getAllVeiculos);

module.exports = router;

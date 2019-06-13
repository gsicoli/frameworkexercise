const router = require('express').Router();
const { models } = require('../src/models');

const createVeiculo = async (req, res) => {
  try {
    const veiculo = new models.Veiculo(req.body);
    await veiculo.save();
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
};

const getAllVeiculos = async (req, res) => {
  try {
    const veiculos = await models.Veiculo.find();
    res.send(veiculos);
  } catch (err) {
    res.sendStatus(500);
  }
};

router.post('/', createVeiculo);
router.get('/', getAllVeiculos);

module.exports = router;

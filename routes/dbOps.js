const router = require('express').Router();
const { models } = require('../src/models');

const createVeiculo = async (req, res, next) => {
  try {
    const veiculo = new models.Veiculo(req.body);
    await veiculo.save();
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

const getAllVeiculos = async (req, res, next) => {
  try {
    const veiculos = await models.Veiculo.find();
    res.send(veiculos);
  } catch (err) {
    next(err);
  }
};

router.post('/', createVeiculo);
router.get('/', getAllVeiculos);

module.exports = router;

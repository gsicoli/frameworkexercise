const router = require('express').Router();
const { models } = require('../backend/models');

const createVehicle = async (req, res, next) => {
  try {
    const vehicle = new models.Vehicle(req.body);
    await vehicle.save();
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

const getAllVehicles = async (req, res, next) => {
  try {
    const vehicles = await models.Vehicle.find();
    res.send(vehicles);
  } catch (err) {
    next(err);
  }
};

router.post('/', createVehicle);
router.get('/', getAllVehicles);

module.exports = router;

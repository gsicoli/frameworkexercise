const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  referencia: String,
  fipe_codigo: String,
  name: String,
  combustivel: String,
  marca: String,
  ano_modelo: String,
  preco: String,
  key: String,
  time: Number,
  veiculo: String,
  id: String,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;

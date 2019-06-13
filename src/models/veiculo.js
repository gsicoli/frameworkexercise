const mongoose = require('mongoose');

const veiculoSchema = new mongoose.Schema({
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

const Veiculo = mongoose.model('Veiculo', veiculoSchema);

module.exports = Veiculo;

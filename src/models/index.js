const mongoose = require('mongoose');
const Veiculo = require('./veiculo');

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Veiculo };

module.exports = { connectDb, models };

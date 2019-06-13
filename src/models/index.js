const mongoose = require('mongoose');
const Veiculo = require('./veiculo');

const connectDb = () => mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const models = { Veiculo };

module.exports = { connectDb, models };

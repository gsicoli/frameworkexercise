const mongoose = require('mongoose');
const Vehicle = require('./vehicle');

const connectDb = () => mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const models = { Vehicle };

module.exports = { connectDb, models };

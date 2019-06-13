const express = require('express');
const cors = require('cors');
const fipe = require('./routes/fipe');
const { connectDb } = require('./src/models');

require('custom-env').env();

const app = express();

app.use(cors());
app.use('/fipe', fipe);

const startServer = async () => {
  await connectDb();

  app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is running.');
  });
};

startServer();

const express = require('express');
const next = require('next');
const cors = require('cors');
const bodyParser = require('body-parser');
const fipe = require('./routes/fipe');
const dbOps = require('./routes/dbOps');
const { connectDb } = require('./src/models');

require('custom-env').env();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/fipe', fipe);
app.use('/db-access', dbOps);

const startServer = async () => {
  const isDev = process.env.NODE_ENV !== 'production';
  const nextRenderer = next({ isDev });
  const nextHandler = nextRenderer.getRequestHandler();

  try {
    await Promise.all([nextRenderer.prepare(), connectDb()]);
  } catch (err) {
    console.log(err);
    return;
  }

  app.get('*', (req, res) => nextHandler(req, res));

  app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is running.');
  });
};

startServer();

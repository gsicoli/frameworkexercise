const express = require('express');
const nextlib = require('next');
const cors = require('cors');
const bodyParser = require('body-parser');
const { fipe, dbOps } = require('./routes');
const { connectDb } = require('./src/models');

require('custom-env').env();

const startServer = async () => {
  const isDev = process.env.NODE_ENV !== 'production';
  const nextRenderer = nextlib({ isDev });
  const nextHandler = nextRenderer.getRequestHandler();
  const app = express();

  try {
    await Promise.all([nextRenderer.prepare(), connectDb()]);
  } catch (err) {
    console.log(err);
    return;
  }

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Routes
  app.use('/fipe', fipe);
  app.use('/db-access', dbOps);

  // Next will map everything under 'pages'.
  app.get('*', (req, res) => nextHandler(req, res));

  app.use((err, req, res, next) => {
    if (res.headersSent) {
      next(err);
    }
    res.sendStatus(500);
  });

  app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is running.');
  });
};

startServer();

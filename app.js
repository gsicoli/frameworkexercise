const express = require('express');
const cors = require('cors');
const fipe = require('./routes/fipe');

const app = express();

app.use(cors());
app.use('/fipe', fipe);

app.listen(8888, () => {
  console.log('Server is running.');
});

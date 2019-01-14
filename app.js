const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send('Express!');
})

module.exports = app;

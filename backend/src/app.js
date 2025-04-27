const express = require('express');
const { clientsModel } = require('./models');

const app = express();

app.use(express.json());

app.get('/', async (_req, res) => {
  const clients = await clientsModel.findAll();
  return res.status(200).json(clients);
});

module.exports = app;

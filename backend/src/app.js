const express = require('express');
const cors = require('cors');
const { clientsModel } = require('./models');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (_req, res) => {
  const clients = await clientsModel.findAll();
  return res.status(200).json(clients);
});

app.post('/', async (req, res) => {
  const data = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.address,
    req.body.plan,
    req.body.goal
  ];

  await clientsModel.addClient(data);

  return res.status(200).json("Cliente registrado com sucesso");
});

app.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.address,
    req.body.plan,
    req.body.goal
  ];

  await clientsModel.updateClient(data, id);

  return res.status(200).json("Cliente atualizado com sucesso");
});

app.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await clientsModel.deleteClient(id);

  return res.status(200).json("Cliente excluido com sucesso")
});

module.exports = app;

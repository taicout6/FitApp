const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const query = 'SELECT * FROM clients';
  const [clients] = await connection.execute(query);
  return camelize(clients);
};

const addClient = async (data) => {
  const [name, email, phone, address, plan, goal] = data;
  const query = 'INSERT INTO clients (`name`, `email`, `phone`, `address`, `plan`, `goal`) VALUES (?, ?, ?, ?, ?, ?)';

  await connection.execute(query, [name, email, phone, address, plan, goal]);
};



module.exports = {
  findAll,
  addClient,
};

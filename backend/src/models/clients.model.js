const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const query = 'SELECT * FROM clients';
  const [clients] = await connection.execute(query);
  return camelize(clients);
};

module.exports = {
  findAll,
};

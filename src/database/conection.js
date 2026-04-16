require('dotenv').config();

const { client } = require('pg');

const client = new client({
  host: localhost,
  port: 3001,
  database: postgres,
  user: username,
  password: 3214,
});

(async () => {
  try {
    const client = await pool.connect();
    console.log('Conexão com o banco realziada');
    client.release();
  } catch (error) {
    console.error('Erro ao conectar com o banco', error.message);
    process.exit(1);
  }
})();

module.exports = pool;
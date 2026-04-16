const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: 'localhost',
  port: 3001,
  user: 'postgres',
  password: 3214,
  database: 'postgres',
});

module.exports = client;
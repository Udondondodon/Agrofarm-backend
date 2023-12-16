import { Sequelize } from 'sequelize';

const mysql2 = require('mysql2');

const db = new Sequelize('agrofarm', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: mysql2,
});

export default db;

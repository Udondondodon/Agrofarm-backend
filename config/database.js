import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2';

const db = new Sequelize('agrofarm', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: mysql2,
  port: 3306,
});

export default db;

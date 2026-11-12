import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

console.log('VARIAVEIS SEQUELIZE');
console.log(process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PORT);
console.log(process.env.DB_HOST);

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    dialect: 'postgres',
    logging: false,
  },
);

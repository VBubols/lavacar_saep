import express from 'express';
import cors from 'cors';
//import dotenv from 'dotenv';
import { sequelize } from './config/database.js';
import './models/index.js';

import router from './routes/index.js';

//dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
  }),
);

app.use(express.json());

app.use('/api', router);

const iniciar = async () => {
  try {
    console.log('passou aqui');
    await sequelize.authenticate();
    console.log('passou aqui 2');
    await sequelize.sync();

    app.listen(process.env.PORT || 3000, () => {
      console.log('Servidor iniciado.');
    });
  } catch (error) {
    console.error('Falha ao iniciar:', error);
    process.exit(1);
  }
};

iniciar();

import '../db/sequelize.js';
import express from 'express';
import router from './routes/v1/index.js';

const app = express();

router(app);

export default app;
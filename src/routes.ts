import express from 'express';
import knex from './database/connection';

import PointsControllers from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';

const routes = express.Router();
const pointsControllers = new PointsControllers;
const itemsController = new ItemsController;

routes.use(express.json());

routes.get('/items', itemsController.index);
routes.post('/points', pointsControllers.create);

export default routes;
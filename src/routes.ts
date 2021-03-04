import express from 'express';

import PointsControllers from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';

// index, show, create, update, delete

const routes = express.Router();
const pointsControllers = new PointsControllers;
const itemsController = new ItemsController;

routes.use(express.json());

routes.get('/items', itemsController.index);

routes.post('/points', pointsControllers.create);
routes.get('/points/', pointsControllers.index);
routes.get('/points/:id', pointsControllers.show);

export default routes;
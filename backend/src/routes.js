import Router from 'express';
import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

/**
 * Login
 */

routes.post('/session', SessionController.store);

/**
 * Ongs
 */
routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

/**
 * Incidents
 */
routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

/**
 * Profile
 */
routes.get('/profile', ProfileController.index);

export default routes;

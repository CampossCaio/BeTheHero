const { celebrate, Joi, Segments } = require('celebrate');
const Router = require('express');
const OngController = require('./app/controllers/OngController');
const IncidentController = require('./app/controllers/IncidentController');
const ProfileController = require('./app/controllers/ProfileController');
const SessionController = require('./app/controllers/SessionController');


const routes = new Router();

/**
 * Login
 */

routes.post('/session', SessionController.store);

/**
 * Ongs
 */
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required(),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  }),
}), OngController.store);
routes.get('/ongs', OngController.index);

/**
 * Incidents
 */
routes.post('/incidents', IncidentController.store);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}), IncidentController.index);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
}), IncidentController.delete);

/**
 * Profile
 */
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({ authorization: Joi.string().required() }).unknown(),
}), ProfileController.index);

module.exports = routes;

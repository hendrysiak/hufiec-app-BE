import express from 'express';

import * as ordersControllers from './controllers/orders.controller';
import * as userControllers from './controllers/user.controller';
import * as mailingControllers from './controllers/mailing.controller';

export const setupRoutes = (app: express.Express): void => {
  app.get('/', (req, res) => res.send('Welcome to Reservation App API.'));

  //user - deprecated
  app.post('/user/login', userControllers.loggedIn);
  app.post('/user', userControllers.register);
  app.put('/user', userControllers.rechargeAccount);

  //order - deprecated
  app.post('/orders', ordersControllers.getDisabledSeats);
  app.post('/orders/new', ordersControllers.saveFlight);

  //mailing
  app.post('/mail/sent', mailingControllers.sendMail);
  app.post('/mail/sent/ms', mailingControllers.msMailing);
};
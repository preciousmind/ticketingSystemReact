//server router.js

//import dependencies
const express = require('express');

// import controllers
const _ticketController = require('./ticket/controller');
const _userAuthController = require('./user/controller');

module.exports = function(app) {

  const ticketRoutes = express.Router();
  const userRoutes = express.Router();

//==================
// TICKET ROUTES
//==================
  apiRoutes.use('/tickets', ticketRoutes);

  ticketRoutes.post('/create-new-ticket', requireAuth, _ticketController.createTicket);

//==================
// User ROUTES
//==================
  apiRoutes.use('/user', ticketRoutes);

  userRoutes.post('/signup', _userAuthController.signup);
  userRoutes.post('/signin', _userAuthController.signin);
  userRoutes.post('/signout', _userAuthController.signout);

  app.use('/api', apiRoutes);
}

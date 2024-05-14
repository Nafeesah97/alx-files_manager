const express = require('express');
const router = express.Router();

function defineRoutes(appController) {
  router.get('/status', appController.getStatus);
  router.get('/stats', appController.getStats);
}
const AppController = require('../controllers/AppController');

defineRoutes(AppController);

module.exports = router;

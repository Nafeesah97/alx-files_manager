const express = require('express');
const AppController = require('../controllers/AppController');

const router = (api) => {
  api.get('/status', AppController.getStatus);
  api.get('/stats', AppController.getStats);
}

module.exports = router;

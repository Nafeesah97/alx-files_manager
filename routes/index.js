const express = require('express');
const AppController = require('../controllers/AppController');

const router = (api) => {
  api.get('/status', AppController.getStats);
  api.get('/stats', AppController.get);
}

module.exports = router;

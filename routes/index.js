const express = require('express');

const router = express.Router();
const AppController = require('../controllers/AppController').default;
const UsersController = require('../controllers/UsersController').default;

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', UsersController.postNew);

module.exports = router;

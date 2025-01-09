const express = require('express');
const router = express.Router();

const usersController = require("../controllers/users");

// Cambiar 'routes' por 'router'
router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

module.exports = router; // Cambiar 'routes' por 'router'

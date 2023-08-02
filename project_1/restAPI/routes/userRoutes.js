const express = require('express');
const Controller = require('../controllers/usersController');
const router = express.Router();

router.post("/user", Controller.createUser);

router.get("/user", Controller.getUsers);

module.exports = router;

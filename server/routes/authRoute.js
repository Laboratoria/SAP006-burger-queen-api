const { Router } = require('express');
const { login } = require('../controller/authController');

const router = Router();

router.post('/auth', login);

module.exports = router;
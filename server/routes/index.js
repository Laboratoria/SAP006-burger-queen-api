const { Router } = require('express');
const ExampleRouter = require('./exampleRouter');

const router = Router();

// aqui vai todas as rotas
router.use('/example', ExampleRouter);

module.exports = router;

const { Router } = require('express')
const ExampleRouter = require("./ExampleRouter")

const router = Router()

// aqui vai todas as rotas, como um índice
router.use('/example', ExampleRouter);

module.exports = router

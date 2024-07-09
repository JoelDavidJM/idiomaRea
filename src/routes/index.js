const express = require('express');
const idiomaRouter = require('./idioma.router');
const inglesRouter = require('./ingles.router');
const router = express.Router();

// colocar las rutas aquí
router.use(idiomaRouter)
router.use(inglesRouter)


module.exports = router;
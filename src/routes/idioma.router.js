const { getAll, create, getOne, remove, update } = require('../controllers/idioma.controollers');
const express = require('express');

const idiomaRouter = express.Router();

idiomaRouter.route('/idiomas')
    .get(getAll)
    .post(create);

idiomaRouter.route('/idiomas/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = idiomaRouter;
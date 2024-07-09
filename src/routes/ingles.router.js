const { getAll, create, getOne, remove, update } = require('../controllers/ingles.controllers');
const express = require('express');

const inglesRouter = express.Router();

inglesRouter.route('/ingless')
    .get(getAll)
    .post(create);

inglesRouter.route('/ingless/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = inglesRouter;
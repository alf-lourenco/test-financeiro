const despesasControllers = require('../controllers/despesasController');
const despesa = require('express').Router();

despesa.post('/', async (req, res) => {
  await despesasControllers.create(req, res);
});
despesa.get('/', async (req, res) => {
  return await despesasControllers.getall(req, res);
});

module.exports = despesa;

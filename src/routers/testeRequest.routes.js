const despesasControllers = require('../controllers/despesasController');
const home = require('express').Router();

try {
  home.get('/', async (req, res) => {
    res.send('Request successful');
  });
} catch (error) {
  home.get('/', (req, res) => {
    res.status(400).send(error);
  });
}
module.exports = home;

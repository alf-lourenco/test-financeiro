const criarDespesa = require('../service/criarDespesa.service');
const validaBodyDespesa = require('../service/validaBodyDespesa.service');

const despesasControllers = {
  create: async (req, res) => {
    try {
      validaBodyDespesa(req.body);
      await criarDespesa(req.body);
      res.send('Registro criado com sucesso');
    } catch (error) {
      console.log('error ', error);

      res.status(400).json({ msg: error });
    }
  },
  getall: async (req, res) => {
    try {
      const response = await Despesa.find();
      res.json(response);
    } catch (error) {
      res.status(400).send('Erro na solicitação');
    }
  },
  getByIdComum: async (req, res) => {
    try {
    } catch (error) {}
  },
  deleteByIdComum: async (req, res) => {
    const idComumParcelas = req.params.idComumParcelas;
    try {
    } catch (error) {}
  },
  editByIdComum: async (req, res) => {
    try {
    } catch (error) {}
  },
};
module.exports = despesasControllers;

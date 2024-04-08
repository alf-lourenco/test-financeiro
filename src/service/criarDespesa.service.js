const Despesa = require('../model/Despesa');
const validaBodyDespesa = require('./validaBodyDespesa.service');

const criarDespesa = async (value) => {
  try {
   
    await Despesa.create(value);
    return 'Despesa criada com sucesso';
  } catch (error) {
    throw error;
  }
};

module.exports = criarDespesa;

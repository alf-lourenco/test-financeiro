const mongoose = require('mongoose');

const despesa = new mongoose.Schema({
  nomeItem: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },

  vencimento: {
    type: Date,
    required: true,
  },
  quantidadeParcelas: {
    type: Number,
    required: true,
  },
  numeroParcela: {
    type: Number,
    required: true,
  },
  responsavel: {
    type: String,
    default: 'Alfredo',
  },
  situacaoPagamento: {
    type: String,
    default: 'Pendente',
  },
  descricao: {
    type: String,
    required: true,
  },
  idComumParcelas: {
    type: String,
    required: true,
  },
});

const Despesa = mongoose.model('Gastos', despesa);
module.exports = Despesa;

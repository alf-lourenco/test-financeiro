const mongoose = require('mongoose');
const despesa = new mongoose.Schema(
  {
    nomeItem: {
      type: String,
    },
    valor: {
      type: Number,
    },
    valorParcela: {
      type: Number,
    },
    quantidadeParcelas: {
      type: Number,
      default: 1,
    },
    numeroParcela: {
      type: Number,
    },
    vencimento: {
      type: Date,
      default: new Date(),
    },
    situacaoPagamento: {
      type: String,
      default: 'Pendente',
    },
    descricao: {
      type: String,
    },
    idComumParcelas: {
      type: String,
    },
    responsavel: {
      type: String,
      default: 'Alfredo',
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);
const DespesaModel = mongoose.model('Gastos', despesa);
module.exports = DespesaModel;

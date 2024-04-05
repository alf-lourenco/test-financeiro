const mongoose = require('mongoose');

const depesa = new mongoose.schema(
  {
    nomeItem: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      default: 'Produto',
      enum: ['Produto', 'Serviço'],
    },
    valor: {
      type: Number,
    },
    quantidadeParcelas: {
      type: Number,
    },
    numeroParcela: {
      type: Number,
    },
    dataVencimento: {
      type: Date,
    },
    situacaoPagamento: {
      type: String,
      default: "Pendente",
      enum:["Atrasada","Concluída","Pendente"]
    },
    responsavel: {
      type: String,
      default: 'Alfredo',
    },
    descricao: {
      type: String,
    },
    idComumParcelas: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Despesa = mongoose.model('Gastos', depesa);
module.exports = Despesa;

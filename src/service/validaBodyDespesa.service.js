const validaBodyDespesa = (value) => {
  const { nomeItem, valor, vencimento, quantidadeParcelas, numeroParcela, responsavel, situacaoPagamento, descricao } = value;

  if (nomeItem === '' || nomeItem === undefined) {
    throw 'nome inválido';
  }
  return true;
};

module.exports = validaBodyDespesa;

const { default: mongoose } = require('mongoose');
const connectDB = require('../src/db/connectDB');

describe('Teste de conexao com DB', () => {
  test('Concectado com sucesso ', async () => {
    await connectDB();
    const response = mongoose.connection.readyState;
    expect(response).toBe(1);
  });
});

const request = require('supertest');
const { app, server } = require('../server');
const { default: mongoose } = require('mongoose');

describe('Verifica servidor', () => {
  afterAll(async() => {
    server.close();
    await mongoose.disconnect()
  });

  test('Servidor online', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

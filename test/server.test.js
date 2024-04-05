const request = require('supertest');
const { app, server } = require('../server');

describe('Verifica servidor', () => {
  afterAll(() => {
    server.close();
  });

  test('Servidor online', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

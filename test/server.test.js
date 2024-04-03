const request = require('supertest');
const app = require('../server');

describe('Verifica servidor', () => {
  afterAll(() => {
    app.close()
  });
  test('Servidor online', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

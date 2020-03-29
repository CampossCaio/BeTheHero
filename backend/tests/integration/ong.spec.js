/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  // Executa antes de todos os testes
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  // extecuta depois de todos os testes
  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send(
        {
          name: 'SOS concientiza',
          email: 'sos@gmail.com',
          whatsapp: '9999999999',
          city: 'Belo Horizonte',
          uf: 'MG',
        },
      );
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});

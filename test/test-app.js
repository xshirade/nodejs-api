const session = require('supertest-session');
const app = require('../app');

describe('app.js', () => {
  let request;

  beforeEach(() => {
    request = session(app);
  });

  it('GET /, should return 200', (callback) => {
    request
      .get('/')
      .expect(200, 'Express!')
      .end(callback);
  });
});

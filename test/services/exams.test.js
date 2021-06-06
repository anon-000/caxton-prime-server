const app = require('../../src/app');

describe('\'exams\' service', () => {
  it('registered the service', () => {
    const service = app.service('exams');
    expect(service).toBeTruthy();
  });
});

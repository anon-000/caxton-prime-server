const app = require('../../src/app');

describe('\'student-results\' service', () => {
  it('registered the service', () => {
    const service = app.service('student-results');
    expect(service).toBeTruthy();
  });
});

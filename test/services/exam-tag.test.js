const app = require('../../src/app');

describe('\'exam-tag\' service', () => {
    it('registered the service', () => {
        const service = app.service('exam-tag');
        expect(service).toBeTruthy();
    });
});

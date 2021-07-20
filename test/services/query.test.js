const app = require('../../src/app');

describe('\'query\' service', () => {
    it('registered the service', () => {
        const service = app.service('query');
        expect(service).toBeTruthy();
    });
});

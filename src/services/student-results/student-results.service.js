// Initializes the `student-results` service on path `/student-results`
const {StudentResults} = require('./student-results.class');
const createModel = require('../../models/student-results.model');
const hooks = require('./student-results.hooks');

module.exports = function (app) {
    const options = {
        Model: createModel(app),
        paginate: app.get('paginate'),
        whitelist: ['$populate', '$regex', '$options'],
    };

    // Initialize our service with any options it requires
    app.use('/student-results', new StudentResults(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('student-results');

    service.hooks(hooks);
};

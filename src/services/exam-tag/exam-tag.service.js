// Initializes the `exam-tag` service on path `/exam-tag`
const { ExamTag } = require('./exam-tag.class');
const createModel = require('../../models/exam-tag.model');
const hooks = require('./exam-tag.hooks');

module.exports = function (app) {
    const options = {
        Model: createModel(app),
        paginate: app.get('paginate'),
        whitelist: ['$populate', '$regex', '$options'],
    };

    // Initialize our service with any options it requires
    app.use('/exam-tag', new ExamTag(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('exam-tag');

    service.hooks(hooks);
};

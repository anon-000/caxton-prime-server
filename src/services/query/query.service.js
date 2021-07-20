// Initializes the `query` service on path `/query`
const {Query} = require('./query.class');
const createModel = require('../../models/query.model');
const hooks = require('./query.hooks');

module.exports = function (app) {
    const options = {
        Model: createModel(app),
        paginate: app.get('paginate'),
        whitelist: ['$populate', '$regex', '$options'],
    };

    // Initialize our service with any options it requires
    app.use('/query', new Query(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('query');

    service.hooks(hooks);
};

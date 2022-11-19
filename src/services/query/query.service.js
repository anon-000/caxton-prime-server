// Initializes the `query` service on path `/query`
import { Query } from './query.class';

import createModel from '../../models/query.model';
import hooks from './query.hooks';

export default function (app) {
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

// Initializes the `student-results` service on path `/student-results`
import { StudentResults } from './student-results.class';

import createModel from '../../models/student-results.model';
import hooks from './student-results.hooks';

export default function (app) {
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

// Initializes the `exams` service on path `/exams`
import { Exams } from './exams.class';

import createModel from '../../models/exams.model';
import hooks from './exams.hooks';

export default function (app) {
    const options = {
        Model: createModel(app),
        paginate: app.get('paginate'),
        whitelist: ['$populate', '$regex', '$options'],
    };

    // Initialize our service with any options it requires
    app.use('/exams', new Exams(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('exams');

    service.hooks(hooks);
};

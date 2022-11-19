// Initializes the `questions` service on path `/questions`
import { Questions } from './questions.class';

import createModel from '../../models/questions.model';
import hooks from './questions.hooks';

export default function (app) {
    const options = {
        Model: createModel(app),
        paginate: false
    };

    // Initialize our service with any options it requires
    app.use('/questions', new Questions(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('questions');

    service.hooks(hooks);
};

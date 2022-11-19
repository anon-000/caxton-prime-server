// Initializes the `exam-tag` service on path `/exam-tag`
import { ExamTag } from './exam-tag.class';

import createModel from '../../models/exam-tag.model';
import hooks from './exam-tag.hooks';

export default function (app) {
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

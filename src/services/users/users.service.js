// Initializes the `users` service on path `/users`
import { Users } from './users.class';

import createModel from '../../models/users.model';
import hooks from './users.hooks';

export default function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/users', new Users(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('users');

  service.hooks(hooks);
};

import SetMarks from './hooks/SetMarks';
import search from 'feathers-mongodb-fuzzy-search';
import setCreatedBy from '../../hooks/set_created_by';
import setCreatedByQuery from '../../hooks/set_created_by_query';
import {disallow} from 'feathers-hooks-common';

import '@feathersjs/authentication';
import * as feathersAuthentication from '@feathersjs/authentication';

const { authenticate } = feathersAuthentication;

export default {
    before: {
        all: [
            authenticate('jwt'),
            search({
                fields: ['examTitle'],
            }),
        ],
        find: [setCreatedByQuery('createdBy')],
        get: [setCreatedByQuery('createdBy')],
        create: [setCreatedBy()],
        update: [disallow()],
        patch: [disallow()],
        remove: [disallow()]
    },

    after: {
        all: [],
        find: [SetMarks()],
        get: [SetMarks()],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};

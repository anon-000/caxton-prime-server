import Permit from '../../hooks/Permit';
import search from 'feathers-mongodb-fuzzy-search';
import * as feathersAuthentication from '@feathersjs/authentication';

const { authenticate } = feathersAuthentication;


import '@feathersjs/authentication';

export default {
    before: {
        all: [
            authenticate('jwt'),
            search({
                fields: ['name'],
            }),
        ],
        find: [],
        get: [],
        create: [Permit('admin')],
        update: [],
        patch: [Permit('admin')],
        remove: [Permit('admin')]
    },

    after: {
        all: [],
        find: [],
        get: [],
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

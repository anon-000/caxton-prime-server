import search from 'feathers-mongodb-fuzzy-search';
import CheckForRequiredFields from './hooks/CheckForRequiredFields';

export default {
    before: {
        all: [],
        find: [
            search({
                fields: ['name', 'msg', 'phone', 'email'],
            }),
        ],
        get: [],
        create: [CheckForRequiredFields()],
        update: [],
        patch: [],
        remove: []
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

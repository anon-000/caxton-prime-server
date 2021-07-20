import search from 'feathers-mongodb-fuzzy-search';


module.exports = {
    before: {
        all: [],
        find: [
            search({
                fields: ['name', 'msg', 'phone', 'email'],
            }),
        ],
        get: [],
        create: [],
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

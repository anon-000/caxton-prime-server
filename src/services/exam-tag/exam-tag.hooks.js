import Permit from '../../hooks/Permit';

const {authenticate} = require('@feathersjs/authentication').hooks;

module.exports = {
    before: {
        all: [authenticate('jwt')],
        find: [],
        get: [],
        create: [Permit('admin')],
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

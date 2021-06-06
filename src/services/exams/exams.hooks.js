import Permit from '../../hooks/Permit';
import ModuleValidate from '../../hooks/ModuleValidate';

const {authenticate} = require('@feathersjs/authentication').hooks;

module.exports = {
    before: {
        all: [authenticate('jwt')],
        find: [],
        get: [],
        create: [Permit('admin', 'organization'), ModuleValidate.isExamTag()],
        update: [],
        patch: [Permit('admin', 'organization')],
        remove: [Permit('admin', 'organization')]
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

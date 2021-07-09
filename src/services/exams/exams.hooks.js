import Permit from '../../hooks/Permit';
import ModuleValidate from '../../hooks/ModuleValidate';
import SetQuestionCount from './hooks/SetQuestionCount';
import search from 'feathers-mongodb-fuzzy-search';


const {authenticate} = require('@feathersjs/authentication').hooks;

module.exports = {
    before: {
        all: [
            authenticate('jwt'),
            search({
                fields: ['title', 'description'],
            }),
        ],
        find: [],
        get: [],
        create: [Permit('admin', 'organization'), ModuleValidate.isExamTag()],
        update: [],
        patch: [Permit('admin', 'organization')],
        remove: [Permit('admin', 'organization')]
    },

    after: {
        all: [],
        find: [SetQuestionCount()],
        get: [SetQuestionCount()],
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

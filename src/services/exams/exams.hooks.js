import Permit from '../../hooks/Permit';
import ModuleValidate from '../../hooks/ModuleValidate';
import SetQuestionCount from './hooks/SetQuestionCount';
import search from 'feathers-mongodb-fuzzy-search';
import setCreatedBy from '../../hooks/set_created_by';
import * as feathersAuthentication from '@feathersjs/authentication';

const { authenticate } = feathersAuthentication;


import '@feathersjs/authentication';

export default {
    before: {
        all: [
            authenticate('jwt'),
            search({
                fields: ['title', 'description'],
            }),
        ],
        find: [],
        get: [],
        create: [
            Permit('admin', 'organization'),
            ModuleValidate.isExamTag(),
            setCreatedBy(),
        ],
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

import Permit from '../../hooks/Permit';
import ModuleValidate from '../../hooks/ModuleValidate';
import FRequired from '../../hooks/FRequired';

const {authenticate} = require('@feathersjs/authentication').hooks;

module.exports = {
    before: {
        all: [authenticate('jwt')],
        find: [],
        get: [],
        create: [
            Permit('admin', 'organization'),
            FRequired('question', 'Question is required'),
            FRequired('options', 'Options are required'),
            FRequired('answer', 'Answer is required'),
            FRequired('exam', 'Exam Id is required'),
            ModuleValidate.isExam(),
        ],
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

import SetMarks from './hooks/SetMarks';
import search from 'feathers-mongodb-fuzzy-search';
import setCreatedBy from '../../hooks/set_created_by';



const {authenticate} = require('@feathersjs/authentication').hooks;

module.exports = {
    before: {
        all: [
            authenticate('jwt'),
            search({
                fields: ['examTitle'],
            }),
        ],
        find: [],
        get: [],
        create: [setCreatedBy()],
        update: [],
        patch: [],
        remove: []
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

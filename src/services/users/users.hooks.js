import * as feathersAuthentication from '@feathersjs/authentication';
import * as local from '@feathersjs/authentication-local';
import GenerateAccessToken from './hooks/GenerateAccessToken';
import FRequired from '../../hooks/FRequired';
import {iff} from 'feathers-hooks-common';
import IsUser from '../../utils/IsUser';
import setId from '../../hooks/setId';

const {authenticate} = feathersAuthentication.hooks;
const {hashPassword, protect} = local.hooks;

export default {
    before: {
        all: [],
        find: [authenticate('jwt')],
        get: [authenticate('jwt')],
        create: [FRequired('role', 'Role is required'), hashPassword('password')],
        update: [hashPassword('password'), authenticate('jwt')],
        patch: [hashPassword('password'), authenticate('jwt'), iff(IsUser('student'), setId())],
        remove: [authenticate('jwt')]
    },

    after: {
        all: [
            // Make sure the password field is never sent to the client
            // Always must be the last hook
            protect('password')
        ],
        find: [],
        get: [],
        create: [GenerateAccessToken()],
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

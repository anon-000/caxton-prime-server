import { Forbidden } from '@feathersjs/errors';

const roleNames = {
    1: 'student',
    2: 'organization',
    3: 'admin',
};

/**
 *
 * @param roles {"student"|"organization"|"admin"}
 * @returns {function(...[*]=)}
 * @constructor
 */
const Permit = (...roles) => (context) => {
    const { params } = context;

    if (typeof params.provider === 'undefined') return context;
    if (!roles.length) return context;

    const { user } = params;

    const role = roleNames[user.role];

    if (roles.indexOf(role) < 0) throw new Forbidden('You are not allowed to perform this action!');

    return context;
};

export default Permit;

import { checkContext } from 'feathers-hooks-common';
import { BadRequest } from '@feathersjs/errors';
import getByDot from 'lodash/get';
import existsByDot from 'lodash/has';

/**
 *
 * @param fieldNames {Array<String>|String}
 * @param message {String}
 * @returns {function(...[*]=)}
 * @constructor
 */
const FRequiredQuery = (fieldNames, message = '%name% is required') => async (context) => {
    // check this required is called from these hooks
    checkContext(context, 'before', ['find', 'get', 'patch'], 'Required');

    const { params } = context;
    if (!params) return context;

    const { query: _items } = params;

    const items = Array.isArray(_items) ? _items : [_items];

    if (!Array.isArray(fieldNames)) fieldNames = [fieldNames];

    items.forEach((item) =>
        fieldNames.forEach((each) => {
            if (Array.isArray(each)) {
                const [name, nickName] = each;

                const newMessage = message.replace('%name%', nickName);

                if (!existsByDot(item, name)) throw new BadRequest(newMessage);

                const value = getByDot(item, name);

                if (!value && value !== 0 && value !== false) throw new BadRequest(newMessage);
            } else {
                const newMessage = message.replace('%name%', each);

                if (!existsByDot(item, each)) throw new BadRequest(newMessage);

                const value = getByDot(item, each);

                if (!value && value !== 0 && value !== false) throw new BadRequest(newMessage);
            }
        }),
    );
};

// usage
// FRequired('phone');
// FRequired('email', '%name% is required');
// FRequired(['email', 'phone'], '%name% is required');
// FRequired(['email', 'phone', 'address.pin', 'address.city'], '%name% is required');
// FRequired(['email', 'phone', ['firstName', 'First Name'], ['lastName', 'Last Name']], '%name% is required');

export default FRequiredQuery;
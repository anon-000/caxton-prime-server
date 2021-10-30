/**
 * Created By Soumya(soumya@smarttersstudio.com) on 29/10/21 at 9:10 PM.
 * @description check for required fields while register a query.
 */
import {BadRequest} from '@feathersjs/errors';

const CheckForRequiredFields = () => async context => {

    const { data } = context;

    const { name, phone, email } = data;

    if (!name || (name && name === '')) throw new BadRequest('Please provide your name.');

    if (!phone || (phone && phone === '')) throw new BadRequest('Please provide your phone number.');

    if (!email || (email && email === '')) throw new BadRequest('Please provide your email address');

    return context;
};

export default CheckForRequiredFields;

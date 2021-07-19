import { getItems, replaceItems } from 'feathers-hooks-common';

const setDefaultItem = (fieldName, defaultValue) => (context) => {
    const items = getItems(context);

    if (Array.isArray(items)) {
        items.forEach((item) => {
            if (typeof item[fieldName] === 'undefined') item[fieldName] = defaultValue;
        });
    } else {
        console.log(context.data);
        if (typeof items[fieldName] === 'undefined') items[fieldName] = defaultValue;
    }

    replaceItems(context, items);

    return context;
};

export default setDefaultItem;

const setDefaultQuery = (fieldName, defaultValue) => (context) => {
    // const { params } = context;
    // const { query } = params;

    /*if (typeof query[fieldName] === 'undefined') */ context.params.query[fieldName] = defaultValue;
    return context;
};

export default setDefaultQuery;
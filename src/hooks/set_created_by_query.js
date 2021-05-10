/**
 *
 * @param _fieldNames {String}
 * @returns {function(*): (*)}
 */
const setCreatedByQuery = (..._fieldNames) => (context) => {
    const { params } = context;
    if (!params.user) return context;
    const fieldNames = _fieldNames.length ? _fieldNames : ['createdBy'];
    if (Array.isArray(fieldNames)) fieldNames.map((each) => (context.params.query[each] = params.user._id));
    return context;
};

export default setCreatedByQuery;
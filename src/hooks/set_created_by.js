/**
 *
 * @param _fieldNames {String}
 * @returns {function(*): (*)}
 */
const setCreatedBy = (..._fieldNames) => (context) => {
    const { params } = context;
    if (!params.user) return context;
    const fieldNames = _fieldNames.length ? _fieldNames : ['createdBy'];
    // if (typeof fieldNames === 'string') context.data[fieldNames] = params.user._id;
    if (Array.isArray(fieldNames))
        fieldNames.map((each) => {
            if (Array.isArray(context.data)) {
                context.data.map((eachData) => (eachData[each] = params.user._id));
            } else {
                context.data[each] = params.user._id;
            }
        });

    return context;
};

export default setCreatedBy;

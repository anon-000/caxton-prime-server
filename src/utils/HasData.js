

/**
 *
 * @returns {function(*): boolean}
 * @constructor
 * @param name
 * @param values
 */

const HasData =
    (name, ...values) =>
        (context) => {
            const { data } = context;

            const value = data[name];

            return values.indexOf(value) >= 0;
        };

export default HasData;

/**
 *
 * @createdBy Aurosmruti Das
 * @email aurosmruti.das@gmail.com
 * @description ModuleValidate
 * @createdOn 06/06/21 21:02
 */

import {BadRequest} from '@feathersjs/errors';

const ModuleValidateData = (serviceName, key, query = {status: {$ne: 0}}) => async (context) => {
    const {data, app} = context;

    const service = app.service(serviceName);

    const check = async (each) => {
        let id = each[key];

        if (!id) return;

        if (!Array.isArray(id)) id = [id];

        each[`${key}Data`] = [];

        for (let i = 0; i < id.length; i++) {
            const result = await service._get(id[i], {query}).catch(() => null);

            if (!result) throw new BadRequest(`Invalid value of ${key}`);

            each[`${key}Data`].push(result);
        }

        if (each[`${key}Data`].length === 1) each[`${key}Data`] = each[`${key}Data`][0];
    };

    if (Array.isArray(data)) {
        for (const each of data) {
            await check(each);
        }
    } else {
        await check(data);
    }

    return context;
};


ModuleValidateData.isExamTag = (key = 'examTags', query) =>
    ModuleValidateData('exam-tag', key, query);

ModuleValidateData.isExam = (key = 'exam', query) =>
    ModuleValidateData('exams', key, query);


export default ModuleValidateData;

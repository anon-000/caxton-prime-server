/**
 *
 * @createdBy Aurosmruti Das
 * @email aurosmruti.das@gmail.com
 * @description exam_scheduler.js
 * @createdOn 12/07/21 2:53 am
 */


import {CronJob} from 'cron';
import moment from 'moment';

const ExamScheduler = async (app) => {
    const job = new CronJob('0 */1 * * * *', async function () {
        const examService = app.service('exams');

        const nowDate = new Date();

        const exams = await examService
            ._find({
                query: {
                    type: 2,
                    scheduledAt: {$lte: nowDate},
                    status: {$ne: 3},
                },
                paginate: false,
            });
        console.log(`scheduler working ${nowDate} : length ${exams.length}`);

        for (const each of exams) {
            const {_id: id, duration, scheduledAt, status} = each;
            if (status === 1) {
                await examService._patch(id, {status: 2});
            } else {
                if (nowDate > moment(scheduledAt).add(duration, 'minutes').toDate()) {
                    await examService._patch(id, {status: 3});
                }
            }
        }
    });
    job.start();
};

export default ExamScheduler;

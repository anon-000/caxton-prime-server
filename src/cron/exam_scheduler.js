/**
 *
 * @createdBy Aurosmruti Das
 * @email aurosmruti.das@gmail.com
 * @description exam_scheduler.js
 * @createdOn 12/07/21 2:53 am
 */


import {CronJob} from 'cron';
// import moment from 'moment';

const ExamScheduler = async (app) => {
    const job = new CronJob('0 */1 * * * *', async function () {
        const examService = app.service('exams');

        const nowDate = new Date();

        const exams = await examService
            ._find({
                query: {
                    type: 2,
                },
                paginate: false,
            });
        console.log(nowDate, exams);

    });
    job.start();
};

export default ExamScheduler;

import users from './users/users.service.js';
import examTag from './exam-tag/exam-tag.service.js';
import exams from './exams/exams.service.js';
import questions from './questions/questions.service.js';
import queries from './query/query.service.js';
import studentResults from './student-results/student-results.service.js';
import upload from './upload/upload.service.js';


// eslint-disable-next-line no-unused-vars
export default function (app) {
    app.configure(users);
    app.configure(examTag);
    app.configure(upload);
    app.configure(exams);
    app.configure(questions);
    app.configure(studentResults);
    app.configure(queries);
}

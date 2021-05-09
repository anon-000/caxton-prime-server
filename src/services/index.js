import users from './users/users.service.js';
import examTag from './exam-tag/exam-tag.service.js';


// eslint-disable-next-line no-unused-vars
export default function (app) {
    app.configure(users);
    app.configure(examTag);
}

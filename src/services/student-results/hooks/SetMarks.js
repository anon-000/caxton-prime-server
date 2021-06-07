/**
 *
 * @createdBy Aurosmruti Das
 * @email aurosmruti.das@gmail.com
 * @description SetMarks
 * @createdOn 06/06/21 23:45
 */

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const SetMarks = () => async (context) => {
    const {result, app} = context;

    const calculateSecuredMarks = (each) => {
        let sum = 0;
        for (const studentAnswer of each.studentAnswer) {
            if (arraysEqual(studentAnswer.question.answer, studentAnswer.choice)) {
                sum = sum + 4;
            }
        }
        return sum;
    };

    const calculateTotalMarks = async (each) => {
        const exam = await app.service('exams').get(each.exam._id);
        return exam.questionCount * 4;
    };

    if (result.total !== undefined) {
        for (const each of result.data) {
            each.totalMarks = await calculateTotalMarks(each);
            each.securedMarks = calculateSecuredMarks(each);
        }
    } else if (Array.isArray(result)) {
        for (const each of result) {
            each.totalMarks = await calculateTotalMarks(each);
            each.securedMarks = calculateSecuredMarks(each);
        }
    } else {
        context.result.totalMarks = await calculateTotalMarks(context.result);
        context.result.securedMarks = calculateSecuredMarks(context.result);
    }

    return context;
};


export default SetMarks;

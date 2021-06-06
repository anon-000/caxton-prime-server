/**
 *
 * @createdBy Aurosmruti Das
 * @email aurosmruti.das@gmail.com
 * @description SetMarks
 * @createdOn 06/06/21 23:45
 */


const SetMarks = () => async (context) => {
    const {result} = context;
    // console.log(result);

    const calculateSecuredMarks = (each) => {
        let sum = 0;
        for (const studentAnswer of each.studentAnswer) {
            if (studentAnswer.choice === studentAnswer.question.answer) {
                sum = sum + 4;
            }
        }
        return sum;
    };

    if (result.total !== undefined) {
        for (const each of result.data) {
            console.log(each.exam);
            each.totalMarks = each.exam.questionCount * 4;
            each.securedMarks = calculateSecuredMarks(each);
        }
    } else if (Array.isArray(result)) {
        for (const each of result) {
            each.totalMarks = each.exam.questionCount * 4;
            each.securedMarks = calculateSecuredMarks(each);
        }
    } else {
        context.result.totalMarks = context.result.exam.questionCount * 4;
        context.result.securedMarks = calculateSecuredMarks(context.result);
    }

    return context;
};


export default SetMarks;

/**
 *
 * @createdBy Aurosmruti Das
 * @email aurosmruti.das@gmail.com
 * @description SetQuestionCount
 * @createdOn 06/06/21 23:06
 */


const SetQuestionCount = () => async (context) => {
    const {result, app} = context;

    const getQuestionCount = async (each) => {
        const {_id: examId} = each;

        const questions = await app.service('questions')._find({
            query: {
                exam: examId
            },
            paginate: false,
        });
        return questions.length;
    };

    if (result.total !== undefined) {
        for (const each of result.data) {
            each.questionCount = await getQuestionCount(each);
        }
    } else if (Array.isArray(result)) {
        for (const each of result) {
            each.questionCount = await getQuestionCount(each);
        }
    } else {
        context.result.questionCount = await getQuestionCount(result);
    }

    return context;
};

export default SetQuestionCount;

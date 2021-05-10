import LoginHelper from '../../../utils/LoginHelper';

/**
 *   CreatedBy Auro (aurosmruti.das@gmail.com) at 09-04-2021 22:43
 *   @description generate an accessToken for the user after the sign up
 *   process.
 */


const GenerateAccessToken = () => async (context) => {
    const {app} = context;


    const result = {...context.result};

    Object.keys(context.result).forEach((each) => delete context.result[each]);


    const data = await LoginHelper.generateToken(result, app);


    context.result.accessToken = data.accessToken;
    context.result.user = data.user;


    return context;


};


export default GenerateAccessToken;

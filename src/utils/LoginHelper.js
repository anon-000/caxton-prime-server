// import { makeCallingParams } from 'feathers-hooks-common';
// import moment from 'moment';


export default{



    async generateToken(user, app) {
        const accessToken = await app.service('authentication').createAccessToken({ sub: user._id });

        //  const userId = user._id;
        // const RedisClient = app.get('RedisClient');
        // RedisClient.set(`token:${accessToken}`, JSON.stringify({ userId }));

        return { accessToken, user };
    },





};
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication';
import { LocalStrategy } from '@feathersjs/authentication-local';
import { expressOauth } from '@feathersjs/authentication-oauth';

export default app => {
    const authentication = new AuthenticationService(app);

    authentication.register('jwt', new JWTStrategy());
    authentication.register('local', new LocalStrategy());

    app.use('/authentication', authentication);
    app.configure(expressOauth());
};

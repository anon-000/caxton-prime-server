/* eslint-disable no-console */
import logger from './logger';

import app from './app';


const port = app.get('port');

const server_port = process.env.YOUR_PORT || process.env.PORT || 3030;

console.log(server_port);

const server = app.listen(server_port);

process.on('unhandledRejection', (reason, p) =>
    logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
    logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);

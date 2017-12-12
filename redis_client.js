'use strict';

const redis = require('redis');

module.exports = {
    getInstance() {
        if (!process.env.REDIS_HOST || !process.env.REDIS_PORT)  {
            throw new Error('Missing redis parameters.');
        }
        return redis.createClient({host: process.env.REDIS_HOST, port: process.env.REDIS_PORT});
    },
};
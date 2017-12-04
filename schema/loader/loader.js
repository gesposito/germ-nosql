const redis = require('redis').createClient();
const RedisDataLoader = require('redis-dataloader')({ redis: redis });

const DataLoader = require('dataloader');

const loader = (name, loaderFunction) => {
    return new RedisDataLoader(
        // set a prefix for the keys stored in redis. This way you can avoid key
        // collisions for different data-sets in your redis instance.
        `germ-nosql-${name}`,
        // create a regular dataloader. This should always be set with caching disabled.
        new DataLoader(loaderFunction, { cache: false }),
        // The options here are the same as the regular dataloader options, with
        // the additional option "expire"
        {
            // caching here is a local in memory cache. Caching is always done
            // to redis.
            cache: false,
            // if set redis keys will be set to expire after this many seconds
            // this may be useful as a fallback for a redis cache.
            expire: 60,
        }
    );
}


module.exports = loader;
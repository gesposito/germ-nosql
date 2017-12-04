const RedisDataLoader = require('./loader');

const { github } = require('../../services');

const githubLoader = () => {
    return RedisDataLoader(
        'github',
        (ids) => Promise.all(
            ids.map(github.getInfoBy)
        )
    );
}

module.exports = githubLoader;
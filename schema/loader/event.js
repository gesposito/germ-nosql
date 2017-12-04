const RedisDataLoader = require('./loader');

const eventLoader = (models) => {
    const eventById = (id) => {
        return models.Event.findById(id)
            .populate({
                'path': 'attendees',
                'model': 'User'
            });
    }

    return RedisDataLoader(
        'event',
        (ids) => Promise.all(
            ids.map(eventById)
        )
    );
}

module.exports = eventLoader;
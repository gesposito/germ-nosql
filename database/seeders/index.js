const seeder = require('mongoose-seeder');
const data = require('./data.json');

const models = require('../models');

models.once('open', () => {
    seeder.seed(data, { dropDatabase: false, dropCollections: false })
        .then((data) => console.info('MongoDB seeded'))
        .catch((err) => console.error(err))
        .finally(() => {
            models.close();
        });
});
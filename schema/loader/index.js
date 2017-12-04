const db = require('../../database/models');

const event = require('./event')(db.models);
const github = require('./github')();

module.exports = {
    event,
    github,
}

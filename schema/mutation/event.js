const graphql = require('graphql');
const { GraphQLString } = graphql;

const { event, eventInput } = require('../type');

const eventCreate = {
    type: event,
    description: 'Create a new Event',
    // `args` describes the arguments that the `event` mutation accepts
    args: {
        input: { type: eventInput }
    },
    resolve: (root, { input }, context) => {
        return root.db.Event.create(input);
    }
}

module.exports = eventCreate;
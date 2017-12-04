const graphql = require('graphql');
const { GraphQLString } = graphql;

const { event } = require('../type');

const eventQuery = {
    type: event,
    // `args` describes the arguments that the `event` query accepts
    args: {
        id: { type: GraphQLString }
    },
    resolve: (root, { id }, { loaders }) => {
        return loaders.event.load(id);
    }
}

module.exports = eventQuery;


const graphql = require('graphql');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLID, GraphQLString } = graphql;

const userType = require("./user");

// Define the Event type
const eventType = new GraphQLObjectType({
    name: 'Event',
    description: 'Returns an Event by its id',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: (self) => self._id
        },
        name: { type: new GraphQLNonNull(GraphQLString) },
        attendees: { type: new GraphQLList(userType) },
    }
});

module.exports = eventType;
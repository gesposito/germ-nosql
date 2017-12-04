const graphql = require('graphql');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = graphql;

// Define the EventInput type
const eventInputType = new GraphQLInputObjectType({
    name: 'EventInput',
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
    }
});

module.exports = eventInputType;
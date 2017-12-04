const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType } = graphql;

const query = require('./query');
const mutation = require('./mutation');

// Define the Query type
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...query,
    }
});

// Define the Mutation type
const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...mutation,
    }
});

module.exports = new GraphQLSchema({ 
    query: queryType,
    mutation: mutationType
});
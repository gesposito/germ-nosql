const graphql = require('graphql');
const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = graphql;

const { github } = require('../loader');

// Define the User type
const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { 
            type: new GraphQLNonNull(GraphQLID),
            resolve: (self) => self._id
        },
        name: { type: new GraphQLNonNull(GraphQLString) },
        username: { type: GraphQLString },
        location: {
            type: GraphQLString,
            resolve: (self) => github.load(self.username).then(user => user.location)
        }
    }
});

module.exports = userType;
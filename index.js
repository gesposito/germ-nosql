const http = require('http');
const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require("./schema");
const db = require('./database/models');
const loaders = require('./schema/loader');

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    context: {
        loaders: loaders
    },
    rootValue: {
        db: db.models,
    },
    graphiql: process.env.NODE_ENV !== 'production',
    pretty: process.env.NODE_ENV !== 'production',
}));

const port = 4000;
const server = http.createServer(app);

db.once('open', () => {
    server.listen(port, () => {
        console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);
    });
});
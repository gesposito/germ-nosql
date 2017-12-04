# What's this

**G**raphQL
**E**xpress
**R**edis
**M**ongoDB

# Requirements

- Node
- npm
- Docker

## MongoDB and Redis with Docker
If you have Docker installed you can run
```
docker-compose -f docker-compose-dev.yml up
```

# Running the project

## Install
```
npm install
```

## Configure
The project demos some external GraphQL calls to GitHub that will require a token. 
You can generate here
https://github.com/settings/tokens
and configure it inside
`services/config.js`

## Start
```
npm start
```

## Seeding
```
npm run seed
```

## Open
GraphQL (and GraphiQL) will start at
http://localhost:4000/graphql

## Queries
You can find some example queries inside
`query-samples.gql`
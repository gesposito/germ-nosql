const rp = require('request-promise-native');
const config = require('./config');

const github = {
    getInfoBy(username) {
        console.info(`Getting GitHub's infos for ${username}`);
        
        const query = `
            query location($username: String!) {
                user(login: $username) {
                    location
                }
            }
        `;

        const variables = {
            username
        };

        const options = {
            method: 'POST',
            uri: 'https://api.github.com/graphql',
            json: true,
            body: {
                query,
                variables
            },
            headers: {
                'User-Agent': "germ-nosql",
                'Authorization': `token ${config.github}`
            },
            transform: ({ data, message }) => {                
                if (!data) {
                    console.info(`GitHub's response: ${message}`);

                    return null;
                };
                
                return data.user;
            },
        };

        return rp(options);
    }
}

module.exports = github;
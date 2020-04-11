require('dotenv').config();
module.exports = {
    env: {
        strapiToken: process.env.STRAPI_TOKEN,
        srapiURI: process.env.STRAPI_URI,
    },
};

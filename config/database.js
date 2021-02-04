const parse = require('pg-connection-string').parse

module.exports = ({ env }) => {
  if(env('NODE_ENV') === 'production') {

  }
  /* return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'sqlite',
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
          },
          options: {
            useNullAsDefault: true,
          },
        },
    },
  } */
  return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'mongoose',
          settings: {
            uri: env('DATABASE_URI'),
          },
          options: {
            ssl: true,
          },
        },
    },
  }
};
